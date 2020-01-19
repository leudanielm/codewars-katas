// https://www.codewars.com/kata/5241060ff2471a5d7600025a

function Archiver() {
    
    var _archiver = {
      set temperature(val) {
        this.archive.push({
          'date': new Date(),
          'val': val
        });
        lastTemp = val;
      },
      get temperature() { return this.archive[this.archive.length-1].val; },
      'archive': [],
      'getArchive': function() { return this.archive; }
    };
    

    //TODO: implement "Archiver" as a self-archiving object
    //...ensure that when "temperature" property is
    //...set, that the array returned by getArchive
    //...gets a log entry in the form of {date:,val:}
    return _archiver;
}
