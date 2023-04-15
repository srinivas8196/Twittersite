import React, { Component } from 'react'

export default class Mainfeed extends Component {
  render() {
    return (
      <>
      
      <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/* <!-- tweetbox starts --> */}
      <div className="tweetBox">
        <form>
          <div className="tweetbox__input">
            <img
              src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
              alt=""
            />
            <input type="text" placeholder="What's happening?" />
          </div>
          <button className="tweetBox__tweetButton">Tweet</button>
        </form>
      </div>
      {/* <!-- tweetbox ends --> */}

      {/* <!-- post starts --> */}
      <div className="post">
        <div className="post__avatar">
          <img
            src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
            alt=""
          />
        </div>

        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Srinivasa Raje Urs V
                <span className="post__headerSpecial"
                  ><span className="material-icons post__badge"> verified </span>@Srinivas.rajurs</span
                >
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <img
            src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
            alt=""
          />
          <div className="post__footer">
            <span className="material-icons"> repeat </span>
            <span className="material-icons"> favorite_border </span>
            <span className="material-icons"> publish </span>
          </div>
        </div>
      </div>
      {/* <!-- post ends --> */}

      {/* <!-- post starts --> */}
      <div className="post">
        <div className="post__avatar">
          <img
            src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png"
            alt=""
          />
        </div>

        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                Srinivas Raje Urs V
                <span className="post__headerSpecial"
                  ><span className="material-icons post__badge"> verified </span>@Srinivas.rajurs</span
                >
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <img
            src="https://www.focus2move.com/wp-content/uploads/2020/01/Tesla-Roadster-2020-1024-03.jpg"
            alt=""
          />
          <div className="post__footer">
            <span className="material-icons"> repeat </span>
            <span className="material-icons"> favorite_border </span>
            <span className="material-icons"> publish </span>
          </div>
        </div>
      </div>
      {/* <!-- post ends --> */}
    </div>
    
      
      </>
    )
  }
}
