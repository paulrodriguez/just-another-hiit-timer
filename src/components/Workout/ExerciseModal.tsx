import * as React from 'react';
import * as Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export class ExerciseModal extends React.Component<any,any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name:'',
      warmup_minutes:0,
      warmup_seconds:0,
      work_minutes: 0,
      work_seconds: 0,
      cooldown_minutes: 0,
      cooldown_seconds: 0
    }
  }

  render() {
    return(
      <Modal
      isOpen={this.props.modalIsOpen}
      onRequestClose={this.props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      <h2>Hello</h2>
      <button onClick={this.props.closeModal}>X</button>
      <form>
        <input type="text" placeholder="exercise name" name="name" value={this.state.name} />
        <div>
        <span>warm up</span>
        <input type="number" min="0" placeholder="minutes" name="warmup_minutes" value={this.state.warmup_minutes} />
        <input type="text" min="0" max="59" placeholder="seconds" name="warmup_seconds" value={this.state.warmup_seconds} />
        </div>
        <div>
        <span>work</span>
        <input type="text" min="0" placeholder="minutes" name="work_minutes" value={this.state.work_minutes} />
        <input type="text" min="0" max="59" placeholder="seconds" name="work_seconds" value={this.state.work_seconds} />
        </div>
        <div>
        <span>cooldown</span>
        <input type="text" min="0" placeholder="minutes" name="cooldown_minutes" value={this.state.cooldown_minutes} />
        <input type="text" min="0" max="59" placeholder="seconds" name="cooldown_seconds" value={this.state.cooldown_seconds} />
        </div>
      </form>

    </Modal>
    );
  }
}
