import type { Student } from "./Student"
import type { Teacher } from "./Teacher"

export class School {
  private students: Student[] = []
  private teachers: Teacher[] = []

  addStudent(student: Student): void {
    this.students.push(student)
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher)
  }

  displayInfo(): void {
    console.log("\n=== SCHOOL INFO ===")
    console.log("\nTeachers:")
    this.teachers.forEach((teacher) => teacher.introduce())

    console.log("\nStudents:")
    this.students.forEach((student) => student.displayAllInfo())
  }
}
