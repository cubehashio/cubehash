package commands

import (
	"github.com/cubehashio/CubeHash/api"
	ethbaseapp "github.com/cubehashio/CubeHash/app/ethereum"
	tmbaseapp "github.com/cubehashio/CubeHash/app/tendermint"
	ethServer "github.com/cubehashio/CubeHash/server/ethereum"
	"github.com/cubehashio/CubeHash/server/tendermint"
	ethUtils "github.com/ethereum/go-ethereum/cmd/utils"
	"github.com/ethereum/go-ethereum/eth"
	ethlog "github.com/ethereum/go-ethereum/log"
	tmtypes "github.com/tendermint/tendermint/abci/types"
	tmnode "github.com/tendermint/tendermint/node"
	tmclient "github.com/tendermint/tendermint/rpc/client"
	"os"
)

type Services struct {
	// tm
	tmNode  *tmnode.Node
	tmApp   *tmtypes.Application
	tmLocal *tmclient.Local
	// eth
	ethNode  *eth.Ethereum
	ethState *ethbaseapp.EthereumWorkState
}

func StartServices(rootDir string) (*Services, error) {
	// ethereum node
	emNode := ethServer.StartNewEthereum(CliContext)

	var backend *api.Backend
	// Get a registered backend object pointer from Ethereum
	if err := emNode.Service(&backend); err != nil {
		ethUtils.Fatalf("ethereum backend service not running: %v", err)
	}

	ethEthereum := backend.Ethereum()
	tdCfg, err := tendermint.GetTendermintConfig()
	if err != nil {
		ethlog.Warn(err.Error())
		os.Exit(1)
	}

	// eth state api
	ethState := ethbaseapp.NewEthereumWorkState(ethEthereum)

	// tendermint application
	tdmtApp := tmbaseapp.NewTendermintApplication(tdCfg, ethState)

	// Create & start tendermint node
	tmNode, err := tendermint.StartTendermint(tdCfg, rootDir, tdmtApp)
	if err != nil {
		ethlog.Warn(err.Error())
		os.Exit(1)
	}

	//tdmtApp.SetConfig()

	// abci local client
	tmLocal := tmclient.NewLocal(tmNode)

	// Create Services
	var tmApp tmtypes.Application = tdmtApp
	services := &Services{
		tmNode:tmNode,
		tmApp:&tmApp,
		tmLocal:tmLocal,
		ethNode: ethEthereum,
		ethState: ethState,
	}

	// start tx add pool event listen
	txListen := ethbaseapp.NewTxListenPush(ethEthereum, services)
	txListen.Start()

	return services, nil
}

// broadcast tx by tendermint
func (s *Services) BroadcastTransaction(tx []byte) {
	s.tmLocal.BroadcastTxAsync(tx)
}
