package main

import (
	"os"
	"github.com/spf13/cobra"
	basecmd "github.com/cubehashio/cubehash/server/commands"
	"github.com/tendermint/tendermint/libs/cli"
)

// Unetcmd is the entry point for this binary
var (
	Unetcmd = &cobra.Command{
		Use:   "cubehash",
		Short: "The cubehash Network",
		Run: func(cmd *cobra.Command, args []string) {
			cmd.Help()
		},
	}
	lineBreak = &cobra.Command{Run: func(*cobra.Command, []string) {}}
)

func main() {
	// disable sorting
	cobra.EnableCommandSorting = false
	// add commands
	prepareNodeCommands()
	//prepareClientCommands()

	Unetcmd.AddCommand(
		nodeCmd,
		//clientCmd,
		basecmd.AttachCmd,
		//versionCmd,
		lineBreak,
		//auto.AutoCompleteCmd,
	)
	// prepare and add flags
	basecmd.SetUpRoot(Unetcmd)
	executor := cli.PrepareMainCmd(Unetcmd, "CM", os.ExpandEnv("$HOME/.cubehash"))
	executor.Execute()
}
