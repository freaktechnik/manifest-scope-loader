module.exports = function(source) {
    this.cacheable(true);
    var manifest;
    if(typeof this.inputValue == "object") {
        manifest = this.inputValue;
    }
    else {
        try {
            manifest = JSON.parse(source);
        }
        catch (e) {
            manifest = this.exec(source, this.resourcePath);
        }
    }

    manifest.scope = this.options.output.publicPath;
    this.value = manifest;
    return JSON.stringify(manifest, undefined, this.minimize ? undefined : 2);
};

