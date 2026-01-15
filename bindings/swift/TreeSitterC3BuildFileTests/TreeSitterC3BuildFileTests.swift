import XCTest
import SwiftTreeSitter
import TreeSitterTsC3BuildFile

final class TreeSitterTsC3BuildFileTests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_c3_build_file())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading C3BuildFile grammar")
    }
}
