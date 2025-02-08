pragma solidity ^0.5.0;

contract SocialNetwork {

    struct Post {
        uint id;
        string content;
        uint tipAmount;
        address payable author;
    }

    string public name;
    uint public postCount = 0;
    mapping(uint => Post) public posts;

    constructor() public {
        name = "Peer Connect";
    }

    // Post Created Event
    event PostCreated(
        uint id,
        string content,
        uint tipAmount,
        address payable author
    );

    // Post Tipped Event
    event PostTipped(
        uint id,
        string content,
        uint tipAmount,
        address payable author
    );

    function createPost(string memory _content) public {
        // Require valid content
        require(bytes(_content).length > 0);
        // Increment the post count
        postCount ++;
        // Create the post
        posts[postCount] = Post(postCount, _content, 0, msg.sender);
        // Trigger event
        emit PostCreated(postCount, _content, 0, msg.sender);
    }

    function tipPost(uint _id) public payable {
        // Make sure the id is valid
        require(_id > 0 && _id <= postCount);
        // Fetch the post
        Post memory _post = posts[_id];
        // Fetch the author
        address payable _author = address(uint160(_post.author));
        // Pay the author by sending them Ether
        address(_author).transfer(msg.value);
        // Increment the tip amount
        _post.tipAmount = _post.tipAmount + msg.value;
        // Update the post
        posts[_id] = _post;
        // Trigger an event
        emit PostTipped(postCount, _post.content, _post.tipAmount, _author);
    }

}