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
Team "0,1" -d- "1,*" Member

entity Project

Project "1,1" -u- "0,*" Team
Project "1,1" -l- "0,*" Member



entity Project.name
entity Project.description

Project.name -u-* Project
Project.description -u-* Project
Project "0,*" -o "0,1" Project

entity View 
entity View_type

Project "1,1" -r- "0,*" View
View_type "1,1" -l- "0,*" View





entity Task
entity Assignment

Task "1,1" -d- "0,*" Assignment
Member "1,1" -u- "0,*" Assignment

entity Task.name
entity Task.description
entity Task.deadline
entity Tag
entity Task.comment 



Task.name -d-* Task
Task.description -d-* Task
Task.deadline -d-* Task


Tag "1,1" -r- "0,*" Task


Task.comment "0,*" -l- "1,1" Task
Task.comment "0,*" - "1,1" Member :author



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

@startuml

package UserAdministration{
entity User {
    id: UUID
    nickname: TEXT
    email: TEXT
    password: TEXT
    photo: IMAGE
}

entity Ban {
    id: NUMBER
    datetime: DATETIME
    reason: TEXT
}


}

entity Member {
    id: NUMBER
}

entity Project {
    id: UUID
    name: TEXT
    description: TEXT
}



entity Team {
    id: NUMBER
    name: TEXT
    motto: TEXT
}

package AccessControl{

entity Role <<ENUMERATION>> #f7f711 {
    id: NUMBER
    name: TEXT
    descripton: TEXT
}

entity Grant {
    id: NUMBER
    action: TEXT
}

object collaborator
object teamlead
object administrator
object project_manager

collaborator  .u.>  Role :instanceOf
teamlead  .u.>  Role :instanceOf
administrator  .u.>  Role :instanceOf
project_manager  .u.>  Role :instanceOf

}
package TaskManagement{
entity Assignment {
    id: NUMBER
    datetime: DATETIME
}

entity Task {
    id: NUMBER
    name: TEXT
    descripton: TEXT
    deadline: DATETIME <<NULLABLE>>
}

entity Tag <<ENUMERATION>> #f7f711 {
    id: NUMBER
    name: TEXT
    descripton: TEXT
}

entity Task_comment {
    id: NUMBER
    subject: TEXT
    text: TEXT
    datetime: DATETIME
}

entity Sprint{
    id: NUMBER
    name: TEXT
    goal: TEXT
    startdate: DATE <<NULLABLE>>
    enddate: DATE <<NULLABLE>>
}

object todo
object in_progress
object done
object in_review


todo  .d.>  Tag :instanceOf
in_progress  .d.>  Tag :instanceOf
done  .d.>  Tag :instanceOf
in_review  .d.>  Tag :instanceOf

}

package ProgressManagement{
entity View{
    id: NUMBER
    datetime: DATETIME
}

entity View_type <<ENUMERATION>> #f7f711 {
    id: NUMBER
    name: TEXT
    descripton: TEXT
}

object dashboard
object backlog
object kanban
object scrum
object roadmap

dashboard  .u.>  View_type :instanceOf
backlog  .u.>  View_type :instanceOf
kanban  .u.>  View_type :instanceOf
scrum  .u.>  View_type :instanceOf
roadmap  .u.>  View_type :instanceOf

}




User "0,*" -> "1,1" Ban
Member "0,*" -d-> "1,1" User
Member "0,*" -r-> "1,1" Project
Team "0,1" --> "1,*" Member
Team "0,*" -d-> "1,1" Project
Member "0,*" --> "1,1" Role
Role "0,*" -l-> "1,*" Grant
Assignment "0,*" -d-> "1,1" Member
Assignment "0,*" -u-> "1,1" Task
Task "0,*" -u-> "1,1" Tag
Task_comment "0,*" -d-> "1,1" Member :author
Project "0,*" -o "0,1" Project
View "0,*" -d-> "1,1" Project
View "0,*" --> "1,1" View_type
Sprint "0,1" -> "1,*" Task



@enduml

# Реляційна схема

