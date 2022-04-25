function Map() {
    this.theMap = new Object();

    this.put = function(key, val) {
	this.theMap[key] = val;
    };

    this.get = function(key) {
	return this.theMap[key];
    };
}
