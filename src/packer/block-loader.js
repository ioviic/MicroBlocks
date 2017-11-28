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
                        lastBlock.com = loaderUtils.stringifyRequest($this, lastBlock.path);
                        lastBlock.root = loaderUtils.stringifyRequest($this, path.dirname(test));
                    }
                } else {
                    grabBlocksInfo(path.join(test));
                }
        });

    }

    grabBlocksInfo(blocksDirectory);

    return 'module.exports=['+
        blocksInfo.map((widget) => '{' +
            "name:'" + widget.name + "'," +
            "root:'" + widget.root + "'," +
            "type:'" + widget.type + "'," +
            'com:System.import(' + widget.com + '),' +
            '}')
            .join(',\n') + '];';
};
