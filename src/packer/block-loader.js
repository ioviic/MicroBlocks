// @flow
let fs = require('fs');
let path = require('path');
let loaderUtils = require('loader-utils');

let root = process.cwd();

module.exports = function grabBlocks() {

    let blocksDirectory = './src/app/blocks/';

    let blocksInfo = [];
    let $this = this;
    function grabBlocksInfo(blocksPath) {
        fs.readdirSync(path.join(root,blocksPath))
            .map((test) => {
                return path.join(blocksPath, test);
            }).map(function(test) {
                if ( fs.statSync(path.join(root, test)).isFile() ) {
                    if ( path.extname(test) === '.bmf'  ) {
                        // $FlowFixMe
                        blocksInfo.push(require(path.join(root,test)));
                        const blockIndex = blocksInfo.length - 1;
                        const lastBlock = blocksInfo[blockIndex];
                        lastBlock.dir = path.dirname(test);
                        lastBlock.com = loaderUtils.stringifyRequest($this, lastBlock.path);
                        lastBlock.root = loaderUtils.stringifyRequest($this, path.dirname(test));
                    }
                } else {
                    grabBlocksInfo(path.join(test));
                }
        });

    }

    function grabBlockConfig(){

        return blocksInfo
            .filter( function(block) {

                let configPath = path.join(root, block.dir + '/config.json');

                const options = Object.assign(
                    {configFile: configPath},
                    process.env
                );

                let configContent = require(options.configFile);

                if(configContent.block['name'] === block.name) {
                    return true;
                } else {
                    console.error('\x1b[31m', 'Add Configuration for \"' + block.name + '\" Block in config.json', '\x1b[37m')
                }
            })
            .map( function(block) {

                let configPath = path.join(root, block.dir + '/config.json');

                const options = Object.assign(
                    {configFile: configPath},
                    process.env
                );

                let configContent = require(options.configFile);

                return Object.assign(
                    block,
                    {configurations: configContent.block['configurations']}
                );
            });
    }

    grabBlocksInfo(blocksDirectory);
    grabBlockConfig();

    return 'module.exports=['+
        blocksInfo.map((block) => '{' +
            "name:'" + block.name + "'," +
            "root:'" + block.root + "'," +
            "type:'" + block.type + "'," +
            "dir:'" + block.dir + "'," +
            "configurations:'"+JSON.stringify(block.configurations)+"'," +
            'com:System.import(' + block.com + '),' +
            '}')
            .join(',\n') + '];';
};
