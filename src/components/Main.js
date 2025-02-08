import React, { Component } from 'react';
import blockies from 'ethereum-blockies';
import Web3 from 'web3';
import './Main.css';

class Main extends Component {
  render() {
    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <main role="main" className="col-lg-12 d-flex text-center">
            <div className="content mr-auto ml-auto">

            {/* Form to create a new post */}
            <form onSubmit={(event) => {
                event.preventDefault()
                const content = this.postContent.value
                this.props.createPost(content)
                }}>
                <div className="form-group mr-sm-2">
                    <input
                        id="postContent"
                        type="text"
                        ref={(input) => { this.postContent = input }}
                        className="form-control"
                        placeholder="What's on your mind?"
                        required />
                </div>
                <button type="submit" className="btn btn-primary">Share</button>
                <hr />
            </form>

              {/* Loop through the posts and render them using cards */}
              { this.props.posts.map((post, key) => {
                // Generate the avatar
                const avatar = blockies.create({
                  seed: post.author, // seed used to generate icon data, default: random
                  size: 8, // width/height of the icon in blocks, default: 8
                  scale: 4, // width/height of each block in pixels, default: 4
                }).toDataURL();

                return (
                  <div className="card mb-4" key={key}>
                    <div className="card-header">
                      <img
                        className='mr-2'
                        width='30'
                        height='30'
                        src={avatar}
                        alt="avatar"
                      />
                      <small className="text-muted">{post.author}</small>
                    </div>
                    <ul id="postList" className="list-group list-group-flush">
                      <li className="list-group-item">
                        <p className="text-center">{post.content}</p>
                      </li>
                      <li key={key} className="list-group-item py-2">
                        <small className="float-left mt-1 text-muted">
                          TIPS: {window.web3.utils.fromWei(post.tipAmount.toString(), 'Ether')} ETH
                        </small>
                        <button
                          className="btn btn-link btn-sm float-right pt-0"
                          name={post.id}
                          onClick={(event) => {
                            let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                            console.log(event.target.name, tipAmount)
                            this.props.tipPost(event.target.name, tipAmount)
                          }}
                        >
                          TIP 0.1 ETH
                        </button>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Main;