module.exports = function(source) {
    var manifest;
    if(typeof this.inputValue == "object") {
        manifest = this.inputValue;
    }
    else {
        manifest = JSON.parse(source);
    }

    manifest.scope = this.options.output.publicPath;
    this.value = manifest;
    return JSON.stringify(manifest, undefined, this.minimize ? undefined , 2);
};

