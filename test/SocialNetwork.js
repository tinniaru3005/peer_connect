const SocialNetwork = artifacts.require("SocialNetwork");

require('chai')
    .use(require('chai-as-promised'))
    .should();


contract('SocialNetwork', ([deployer, author, tipper]) => {
    let socialNetwork;
    let postCount = 0;
    before(async () => {
        socialNetwork = await SocialNetwork.deployed();
        postCount = await socialNetwork.postCount();
    });

    describe('deployment', async () => {
        
        it('deploys successfully', async () => {
            const address = socialNetwork.address;
            assert.notEqual(address, 0x0);
            assert.notEqual(address, '');
            assert.notEqual(address, null);
            assert.notEqual(address, undefined);
        });

        it('has a name', async () => {
            const name = await socialNetwork.name();
            assert.equal(name, 'Peer Connect');
        });

        it('creates Posts', async () => {
            // Call the createPost function from the smart contract
            // passing the string as the content of the post
            // {from: author} is the address of the author of the post
            const result = await socialNetwork.createPost('This is my first post', {from: author});
            // Capture the event emitted by the createPost function
            const event = result.logs[0].args;
            assert.equal(event.id.toNumber(), 1, 'id is correct');
            assert.equal(event.content, 'This is my first post', 'content is correct');
            assert.equal(event.tipAmount, '0', 'tip amount is correct');
            assert.equal(event.author, author, 'author is correct');
            // assert post count was increased
            const postCount = await socialNetwork.postCount();
            assert.equal(postCount, 1);
            // FAILURE: Post must have content
            await socialNetwork.createPost('', {from: author}).should.be.rejected;
        });

        it('lists Posts', async () => {
            const postCount = await socialNetwork.postCount(); 
            const post = await socialNetwork.posts(postCount);
            assert.equal(post.id.toNumber(), postCount.toNumber(), 'id is correct');
            assert.equal(post.content, 'This is my first post', 'content is correct');
            assert.equal(post.tipAmount, '0', 'tip amount is correct');
            assert.equal(post.author, author, 'author is correct');
        });

        it('allows users to tip posts', async () => {
            // Track the author balance before purchase
            let oldAuthorBalance;
            oldAuthorBalance = await web3.eth.getBalance(author);
            oldAuthorBalance = new web3.utils.BN(oldAuthorBalance);

            const postCount = await socialNetwork.postCount(); 
            // Call the tipPost function from the smart contract
            // passing the id of the post to tip
            // {from: tipper} is the address of the tipper
            const result = await socialNetwork.tipPost(postCount, {from: tipper, value: web3.utils.toWei('1', 'Ether')});
            // Capture the event emitted by the tipPost function
            const event = result.logs[0].args;
            assert.equal(event.id.toNumber(), postCount.toNumber(), 'id is correct');
            assert.equal(event.content, 'This is my first post', 'content is correct');
            assert.equal(event.tipAmount, '1000000000000000000', 'tip amount is correct');
            assert.equal(event.author, author, 'author is correct');
            
            // Check that author received funds
            let newAuthorBalance;
            newAuthorBalance = await web3.eth.getBalance(author);
            newAuthorBalance = new web3.utils.BN(newAuthorBalance);
            
            let tipAmount;
            tipAmount = web3.utils.toWei('1', 'Ether');
            tipAmount = new web3.utils.BN(tipAmount);

            const expectedBalance = oldAuthorBalance.add(tipAmount);
            assert.equal(newAuthorBalance.toString(), expectedBalance.toString());
            
            // FAILURE: Tries to tip a post that does not exist
            // ensure a vlid id is passed
            await socialNetwork.tipPost(99, {from: tipper, value: web3.utils.toWei('1', 'Ether')}).should.be.rejected;
        });
    });
});

