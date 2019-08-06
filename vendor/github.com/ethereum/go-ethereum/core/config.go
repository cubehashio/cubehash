package core

import (
	"os"
	"path/filepath"
)

const StateDir = ".CubeHash/state"

func Homedir() string {
	return os.ExpandEnv(filepath.Join("$HOME", StateDir))
}
