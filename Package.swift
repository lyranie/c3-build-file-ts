// swift-tools-version:5.3

import Foundation
import PackageDescription

var sources = ["src/parser.c"]
if FileManager.default.fileExists(atPath: "src/scanner.c") {
    sources.append("src/scanner.c")
}

let package = Package(
    name: "TreeSitterTsC3BuildFile",
    products: [
        .library(name: "TreeSitterTsC3BuildFile", targets: ["TreeSitterTsC3BuildFile"]),
    ],
    dependencies: [
        .package(name: "SwiftTreeSitter", url: "https://github.com/tree-sitter/swift-tree-sitter", from: "0.9.0"),
    ],
    targets: [
        .target(
            name: "TreeSitterTsC3BuildFile",
            dependencies: [],
            path: ".",
            sources: sources,
            resources: [
                .copy("queries")
            ],
            publicHeadersPath: "bindings/swift",
            cSettings: [.headerSearchPath("src")]
        ),
        .testTarget(
            name: "TreeSitterTsC3BuildFileTests",
            dependencies: [
                "SwiftTreeSitter",
                "TreeSitterTsC3BuildFile",
            ],
            path: "bindings/swift/TreeSitterTsC3BuildFileTests"
        )
    ],
    cLanguageStandard: .c11
)
