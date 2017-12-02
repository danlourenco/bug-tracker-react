import React, { Component } from 'react'

class AddBugForm extends Component {

  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(e) {
    const { _description, _reporter, _severity, _status } = this.refs
    console.log(e)
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.submit}>
          <h2 className="title is-4 is-primary">Submit new bug</h2>

          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input className="input" ref="_description" type="text" placeholder="Description"/>
            </div>
          </div>

          <div className="field">
            <label className="label">Reporter</label>
            <div className="control has-icons-left">
              <input className="input is-success" ref="_reporter" type="text" placeholder="Logged in user" value="" />
              <span className="icon is-small is-left">
                <i className="fa fa-user"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Severity</label>
            <div className="control">
              <div className="select">
                <select ref="_severity">
                  <option>Select severity</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Critical</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Status</label>
            <div className="control">
              <div className="select">
                <select ref="_status">
                  <option>Select status</option>
                  <option>Open</option>
                  <option>Fixing</option>
                  <option>Ready for deployment</option>
                  <option>Fixed</option>
                  <option>Won't fix</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button className="button is-primary">Submit</button>
              </div>
          </div>
      </form>

    )
  }
}

export default AddBugForm