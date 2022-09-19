class Student {
  constructor(name,age,marks){
    this.name=name;
    this.age=age;
    this.marks=marks;
  }
  setPlacementAge(minPlacementAge){
    console.log(this);
    return (minMarks) => {

      console.log("Inside eligibleForCurrentCompany", this)
      if(this.marks > minMarks && this.age > minPlacementAge){
      } else {
        console.log(this.name + " is not ready for placements")
      }
    }
  }
}

const Neha= new Student('Neha', 25,75);
const Navya= new Student('Navya',24,35);

Neha.setPlacementAge(18)(40);
Navya.setPlacementAge(18)(40);