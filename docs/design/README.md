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

User.nickname -d-* User
User.email -d-* User
User.photo -d-* User
User.password -d-* User

entity Ban

Ban "0,1" -l- "0,*" User

entity Ban.list
entity Unban.list

Ban.list -l-* Ban
Unban.list -u-* Ban

entity Authorization

Authorization "0,1" -u- "0,*" User

entity Role

Authorization "0,1" -d- "0,*" Role

entity ProjectManager
entity SystemAdministrator
entity Collaborator
entity Teamlead

SystemAdministrator -u-|> Role
ProjectManager -u-|> Role
Teamlead -u-|> Role
Collaborator -u-|> Role

entity Project

Project "0,*" -r- "1,*" Role

entity Project.manager
entity Project.member
entity Project.name
entity Project.description

Project.name -u-* Project
Project.description -u-* Project
Project.manager -u-* Project
Project.member -u-* Project

entity View 

View "1,1" -l- "0,*" Role

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

Task "0,*" -d- "1,1" Project

entity Task.name
entity Task.description
entity Task.deadline
entity Task.assignment
entity Tag
entity Task.filter
entity Task.comment 

Task.name -d-* Task
Task.description -d-* Task
Task.deadline -d-* Task
Task.assignment -d-* Task

Tag "0,*" -l- "0,*" Task
Task.filter "0,*" -u- "1,1" Task
Task.comment "0,*" -u- "1,1" Task

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

