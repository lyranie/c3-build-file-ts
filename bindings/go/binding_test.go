package tree_sitter_ts_c3_build_file_test

import (
	"testing"

	tree_sitter "github.com/tree-sitter/go-tree-sitter"
	tree_sitter_ts_c3_build_file "github.com/tree-sitter/tree-sitter-ts_c3_build_file/bindings/go"
)

func TestCanLoadGrammar(t *testing.T) {
	language := tree_sitter.NewLanguage(tree_sitter_ts_c3_build_file.Language())
	if language == nil {
		t.Errorf("Error loading C3BuildFile-TS grammar")
	}
}
