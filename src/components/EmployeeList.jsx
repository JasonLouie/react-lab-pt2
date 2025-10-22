import EmployeeListItem from "./EmployeeListItem";

export default function EmployeeList() {
    return (
        <div className="employee-list">
            <EmployeeListItem name="Tommy Pickles" src="/images/tommypickles.jpg" position="Rugrats Protagonist" />
            <EmployeeListItem name="Chuckie Finster" src="/images/chuckiefinster.png" position="Rugrats Supporting Character"/>
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
        </div>
    );
}