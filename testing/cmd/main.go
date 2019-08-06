package main

import (
	"github.com/cubehashio/cubehash/testing"
	"runtime"
)

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())
	testing.AddCmd(testing.GenerateTx)
	testing.AddCmd(testing.Generate)
	testing.AddCmd(testing.TestCmd)
	testing.AddCmd(testing.BalanceCmd)
	testing.Execute()
}
