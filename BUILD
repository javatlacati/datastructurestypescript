package(default_visibility = ["//visibility:public"])
exports_files(["tsconfig.json"])
load("@build_bazel_rules_typescript//:defs.bzl","ts_library")

# NOTE: this will move to node_modules/BUILD in a later release
filegroup(name = "node_modules", srcs = glob([
    "node_modules/**/*.js",
    "node_modules/**/*.d.ts",
    "node_modules/**/*.json",
]))

ts_library(
    name = "datastructurestypescript",
    srcs=[],
    deps = ["//scripts"],
    tsconfig = "config/tsconfig.json"
)
