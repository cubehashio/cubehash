package core

import (
	"encoding/gob"
	"encoding/json"
	"github.com/ethereum/go-ethereum/common"
	"math/big"
	"bytes"
)

const (
	SecondsHour        = 60 * 60
	Second             = 1000 * 1000 * 1000
	// Updated cycle
	ResetTime   uint64 = 12 * SecondsHour
	// cbh : freeGas == 1 : 100
	proportion         = 100
)

//Account is a free gas data structure for each account.
type Account struct {
	// Which means the cbh address of an account.
	User      common.Address `json:"user"`
	// which means the freeGas used in a cycle of an account.
	UseAmount *big.Int       `json:"useAmount"`
	// which means the first time an account uses the freegas in one cycle.
	Timestamp *big.Int       `json:"timestamp"`
}

func (g *Account) DeepCopy(dst interface{}) error {
	var buf bytes.Buffer
	if err := gob.NewEncoder(&buf).Encode(g); err != nil {
		return err
	}
	return gob.NewDecoder(bytes.NewBuffer(buf.Bytes())).Decode(dst)
}

// Calculate the used gas of an account.
func (g *Account) CalculateUsedGas(bTime *big.Int) {
	if g.Timestamp.Uint64() / ResetTime != bTime.Uint64() / ResetTime {
		g.Timestamp = bTime
		g.UseAmount = new(big.Int).SetInt64(0)
		//g.Amount = new(big.Int).SetUint64((balance.Uint64() / 1e18) * proportion)
	}
}

func (g *Account) Marshal() (b []byte, err error) {
	return json.Marshal(g)
}

func (g *Account) UnMarshal(data []byte) (err error) {
	return json.Unmarshal(data, g)
}
