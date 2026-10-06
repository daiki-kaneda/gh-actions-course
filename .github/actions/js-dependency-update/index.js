const core = require('@actions/core')

async function run(params) {
    /*
    [WIP]
    1. Parse inputs:
        1.1 base-branch for which to check for updates
        1.2 target-branch to use to create the PR
        1.3 Github Token for authentication purposes(to create PR)
        1.4 working directory for which to check for dependencies 
    2. Execute npm command within the working directory
    3. Check whether there are modified package*.json files
        3.1 If there are modified files, create a PR
        3.2 Otherwise, conclude the custom action
    */
    core.info('I am a custom JS action')
}

run();