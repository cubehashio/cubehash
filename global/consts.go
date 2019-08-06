package global

import (
	"os"
	"path/filepath"
)

const ProjectDir = ".cubehash"
const ClientIdentifier = "geth"

func Homedir() string {
	return os.ExpandEnv(filepath.Join("$HOME", ProjectDir))
}
