#load("@bazel_tools//tools/build_defs/repo:git.bzl", "git_repository")
git_repository(
    name = "build_bazel_rules_nodejs",
    remote = "https://github.com/bazelbuild/rules_nodejs.git",
    #tag = "0.0.2", # check for the latest tag when you install
    commit="d79f93bbf046728db895c2a53bfd04269167d634"
)

git_repository(
    name="build_bazel_rules_typescript",
    remote="https://github.com/bazelbuild/rules_typescript.git",
    #tag="0.11.1", # check for the latest tag when you install
    commit = "3bfca0624df383e31cff697c7a07d229f9179e05",
)

load("@build_bazel_rules_nodejs//:defs.bzl", "node_repositories")
load("@build_bazel_rules_typescript//:defs.bzl", "ts_setup_workspace")

node_repositories(package_json = ["//:package.json"])

# Include @bazel/typescript in package.json#devDependencies
#local_repository(
#    name = "build_bazel_rules_typescript",
#    path = "node_modules/@bazel/typescript",
#)

ts_setup_workspace()

# ts_devserver needs the Go rules.
# See https://github.com/bazelbuild/rules_go#setup for the latest version.
http_archive(
    name = "io_bazel_rules_go",
    url = "https://github.com/bazelbuild/rules_go/releases/download/0.8.1/rules_go-0.8.1.tar.gz",
    sha256 = "90bb270d0a92ed5c83558b2797346917c46547f6f7103e648941ecdb6b9d0e72",
)

load("@io_bazel_rules_go//go:def.bzl", "go_rules_dependencies", "go_register_toolchains")

go_rules_dependencies()
go_register_toolchains()
