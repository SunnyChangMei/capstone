import React, {Component} from 'react'
import * as posenet from '@tensorflow-models/posenet'

export default class Camera extends Component {
  constructor() {
    super()
    this.state = {
      activeCamera: true
    }
    this.getVideo = this.getVideo.bind(this)
  }
  async componentDidMount() {
    if (navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true})
        this.video.srcObject = stream
      } catch (err) {
        console.error(err)
      }
    }
    const net = await posenet.load()
    const pose = await net.estimateSinglePose(this.video, {
      flipHorizontal: false
    })
    console.log(
      '----------------',
      pose.keypoints[5],
      '-----------------',
      pose.keypoints[6]
    )
  }
  getVideo(element) {
    this.video = element
  }

  render() {
    return (
      <div>
        {this.state.activeCamera ? (
          <video
            width="640"
            height="480"
            controls
            autoPlay={true}
            ref={this.getVideo}
          />
        ) : (
          <h1>......</h1>
        )}
      </div>
    )
  }
}
