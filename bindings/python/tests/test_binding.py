from unittest import TestCase

import tree_sitter
import tree_sitter_ts_c3_build_file


class TestLanguage(TestCase):
    def test_can_load_grammar(self):
        try:
            tree_sitter.Language(tree_sitter_ts_c3_build_file.language())
        except Exception:
            self.fail("Error loading C3BuildFile-TS grammar")
