import React from "react";

class CoursePage extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            courses :{
                title: null
            }
        };
    }
    onTitleChange(event){
        const courses=this.state.courses;
        courses.title=event.target.value;
        this.setState ({courses :courses});
    }
    onClickSave(){
        alert(`Display $(this.state.course.title)`);
    }
  render() {
    return (
      <div>
        <h1>Courses</h1>
        <h2>Add Courses</h2>
        <input type ="text"
        onChange={this.onTitleChange}
        value={this.state.courses.title} />

        <input type ="submit"
        onChange={this.onClickSave}
        value="Save" />

      </div>
    );
  }
}

export default CoursePage;

