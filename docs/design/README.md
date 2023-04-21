# Проєктування бази даних

# Модель бізнес-об'єктів

<center style="
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;"
>

@startuml

entity User

entity User.nickname
entity User.email
entity User.photo
entity User.password

User.nickname -r-* User
User.email -u-* User
User.photo -u-* User
User.password -u-* User


entity Ban

Ban "0,1" -d- "0,*" User



entity Member

Member "0,*" -l- "1,1" User



entity Role
Member "0,*" -d- "1,1" Role

entity Grant
Grant "1,*" -u- "0,*" Role


entity Team
Team "0,*" -d- "1,*" Member

entity Project

Project "1,1" -u- "0,*" Team
Project "1,1" -l- "0,*" Member



entity Project.name
entity Project.description

Project.name -u-* Project
Project.description -u-* Project
Project "0,*" -u-o "0,1" Project

entity View 


Project "1,1" -r- "0,*" View

entity Backlog
entity Kanban
entity Scrum
entity Roadmap
entity Dashboard

Backlog -d-* View
Kanban -l-* View
Scrum -u-* View
Roadmap -u-* View
Dashboard -d-* View



entity Task
entity Assignment

Task "1,1" -d- "0,*" Assignment
Member "1,1" -u- "0,*" Assignment

entity Task.name
entity Task.description
entity Task.deadline
entity Tag
entity Task.filter
entity Task.comment 



Task.name -d-* Task
Task.description -d-* Task
Task.deadline -d-* Task


Tag "1,1" -r- "0,*" Task


Task.comment "0,*" -d- "1,1" Task

Task.filter "0,*" -d- "1,1" Backlog 

entity Sprint

Sprint "0,1" -d- "1,*" Task

entity Sprint.name
entity Sprint.goal
entity Sprint.startdate
entity Sprint.enddate

Sprint.name -d-* Sprint
Sprint.goal -d-* Sprint
Sprint.startdate -d-* Sprint
Sprint.enddate -d-* Sprint

@enduml

</center>

# ER-модель

# Реляційна схема

