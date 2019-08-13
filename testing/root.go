package testing

import (
	"github.com/spf13/cobra"
)

var (
	rootCmd = &cobra.Command{
		Use:   "cubehash",
		Short: "This is the cubehash stress test application",
	}
)

// Execute executes the root command.
func Execute() {
	rootCmd.Execute()
}

func AddCmd(cmd *cobra.Command) {
	rootCmd.AddCommand(cmd)
}
