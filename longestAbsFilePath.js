/* return the length of the longest path from the dir to a file
divide the input str by segments using \n
if the segment doesn't start with \t then add it to the path Array
if it does then check if starts with \t and get the length of how many times \t is matched
if the length is less than the path length then remove the last segment from the path Array
otherwise add it to path 
if the last path segment has a "." then it's a file name
join the segment's in path with "/"
get the path's length and compare it to the current length
return the longest length
*/

/**
 * @param {string} input
 * @return {number}
 */
function isFileName(path){
    return path.includes(".");
}

var lengthLongestPath = function (input) {
    // separate the input str by "\n" => [ 'dir', '\tsubdir1', '\tsubdir2', '\t\tfile.ext' ]
    let segments = input.split('\n');
    // initialize max to be returned at the end
    // console.log(segments)
    let max = 0,
    // set path to empty arr to store file and directories
    path = [];
    for(const segment of segments){
        if(segment.startsWith('\t')){
            // console.log(segment)
            // nesting means segment has one '\t' or it's a subdirectory, if its less than path's length then remove the last item in path
            const nesting = segment.match(/\t/g).length;
            // console.log(nesting)
            while(nesting < path.length){
                // only one '\t' in segment, remove the '\t' from segment
                path.pop();
                // console.log(path)
            }
            // add the segment to end of path
            let removeTab = segment.replace(/\t/g,'');
            path.push(removeTab);
            // console.log(path)
        } else {
            // segment doesn't have '\t', add it to path
            path = [segment]
            // console.log(path)

        }
        // check if last segment added in path has "." indicating it's a file
        if(isFileName(path.at(-1))){
            // create the file path using path "dir/subdir/filename.ext"
            const filePath = path.join("/");
            // get the path's length and compare it to the current length
            if(filePath.length > max) {
                max = filePath.length;
            }
            // console.log(max)
        }
    }
    // return the longest length
    return max
};


// input = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" //20
input = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
console.log(lengthLongestPath(input))