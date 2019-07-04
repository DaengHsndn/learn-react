import React, { Component } from 'react'

class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      students: [
        'Alven',
        'Bayu',
        'Budi',
      ],
      studentsName: '',
      editStudentIndex: null,
    }
  }

  onInputChange = event => {
    this.setState({ studentsName: event.target.value })
  };

  textInputChange = event => {
    this.setState({ students: event.target.value })
  }

  removeStudent = index => {
    const newStudentsList = [...this.state.students]
    newStudentsList.splice(index, 1)
    this.setState({ students: newStudentsList });
  };

  setEditIndex = index => {
    this.setState({ editStudentIndex: index })
  }


  editStudentName = (e, index) => {
    const newStudents = [...this.state.students];
    newStudents[index] = e.target.value;
    this.setState({ students: newStudents })
  }

  addStudentToList = () => {
    const newStudentsList = this.state.students;
    newStudentsList.push(this.state.studentsName)

    this.setState({
      students: newStudentsList,
      studentsName: '',
    });
  }

  listenToEnterKey = e => {
    if (e.key === 'Enter') {
      this.setEditIndex(null);
    }
  }

  render() {
    return (
      <div>
        <h2>Student List</h2>
        <ul>
          {this.state.students.map((value, index) => {
            return (
              <li key={index}>
                {index === this.state.editStudentIndex ? (
                  // true
                  <React.Fragment>
                    <input type="text"
                      value={this.state.students[index]}
                      onChange={e => { this.editStudentName(e, index) }}
                      onKeyPress={this.listenToEnterKey}
                      autoFocus
                    />
                    <button className="btn btn-outline-success" onClick={() => { this.setEditIndex(null) }}>Selesai Edit</button>
                  </React.Fragment>
                ) : (
                    // false
                    <span onClick={() => { this.setEditIndex(index) }}>{value}</span>
                  )}
                <button className="btn btn-outline-danger" onClick={() => { this.removeStudent(index) }}>-</button>
              </li>
            )
          })}
        </ul>
        <input type="text" value={this.state.studentsName} onChange={this.onInputChange} />
        <button className="btn btn-primary" onClick={this.addStudentToList} disabled={this.state.studentsName === ''}>Submit</button>
      </div>
    );
  }
}

export default StudentList;

