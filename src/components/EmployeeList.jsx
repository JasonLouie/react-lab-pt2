import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList() {
    return (
        <div className="employee-list">
            <EmployeeListItem name="Tommy Pickles" src="/images/tommypickles.jpg" position="Rugrats Protagonist" />
            <EmployeeListItem name="Chuckie Finster" src="/images/chuckiefinster.png" position="Rugrats Supporting Character"/>
            <EmployeeListItem name="John Doe" title="Webmaster"/>
            <EmployeeListItem name="Jane Smith" title="Full Stack Developer"/>
            <EmployeeListItem name="Mike Jones" title="Front-End Developer"/>
            <EmployeeListItem name="Mary Anderson" title="Marketing Manager"/>
            <EmployeeListItem name="Susan Lee" title="Social Media Manager"/>
            <EmployeeListItem name="James Johnson" title="Accountant"/>
        </div>
    );
}