OrgManagement
===========

[https://github.com/callumhauber/OrgManagement](https://github.com/callumhauber/OrgManagement)

Overview
--------
**OrgManagement** (working name) is a project focused on creating a web-based Greek and club organization interface. It's goal is to greatly reduce the effort needed to keep organizations running smoothly, reduce internal communication friction, and prevent loss of knowledge from senior members leaving. It will be a highly modular project, with each feature as it's own separate module so that organizations can customize it to their own needs. It will make use of several different integrations in order to provide a more functional and seamless experience. We'll also create an API to allow better modularization, as well as allow organizations to integrate this project into whatever they would like. 

Quick Links
-----------
- [License: GPL-3.0](https://github.com/callumhauber/OrgManagement/blob/main/LICENSE)
- [Code of Conduct](https://github.com/callumhauber/OrgManagement/blob/main/CODE_OF_CONDUCT.md)
- Contribution Guidelines
- [User Personas](https://github.com/callumhauber/OrgManagement/wiki/Design-Personas)


Project Technology/Packages
-----------
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Design System: Headless UI](https://headlessui.dev/)

Features (Overall Goals)
-------------
* Keep record of members, positions, and external accounts
  * Record external account info/passwords
  * Update CMS (Union Club Management System) members and eboard roles
* CAS integration for accounts and login
* Discord and Slack integration
  * Automated election position permission switchover
* Calendar and Event planning
  * For rush, outreach, company visits, and more
  * Keep track of details for repeat events in the future
  * Assign people to event instances
    * Heat map for member contributions/event attendance
  * Discord/Slack DM people to remind them for the event
* Knowledge Base/Documentation
  * Write position documentation and have it easily available
  * Record general organizational knowledge
* Financials
  * Keep track of budgets
  * Record purchases as well as known future costs (ex. paying an event registration fee each semester)
* Inventory
  * Keep a record of what items/tools the organization has
    * System to track loaning out to members
  * Details about where to get consumable items
* AntiArch
  * Figure out who will be away when (CAS/CMS integration?)
  * Alert/warning so it can easily be worked around

Semester Goals
----------
Our goals for this semester are firstly to create the core infrastructure that can be extended by modules, so that future collaboration with 3rd parties is possible. In terms of features, we plan to create club admin accounts and CAS integration, Discord/Slack integration, simple knowledgebase structure, and a basic calendar with the ability to add basic events.

Technology
----------
This project will use the PERN stack (**P**ostgreQL, **E**xpress, **R**eact, and **N**odeJS) as it makes use of newer technologies as is easier to work with than a more tradition LAMP stack. We'll also use an ORM (Object Relational Model) called Prisma in order to abstract database transactions and increase ease of coding and readability. Our API will use the GraphQL architecture.

Team
----
|     **Name**     | **GitHub Handle** |    **Email**    |         **Role**         |
|:----------------:|:-----------------:|:---------------:|:-------------------------|
| Callum Hauber    | callumhauber      | haubec2@rpi.edu | Product Manager/Frontend |
| Sean Hale        | sean-hale-dev     | hales3@rpi.edu  | Technical Lead/Frontend  |
| Zachary McDaniel | zlmcdaniel        | mcdanz@rpi.edu  | Testing Lead/Backend     |
| Alex Bozeat      | alexboz           | bozeaa@rpi.edu  | Database/Backend         |
| Spencer Webb     | webbs2-rpi        | webbs2@rpi.edu  | Backend                  |

Milestones
----------
Milestones are given as weeks from project start, with 8 weeks left in the semester:

- End of Week 2 : Development environments and basic templates setup
- End of Week 4 : Wireframes and core website infrastructure created
- End of Week 5 : CAS integration and admin accounts
- End of Week 6 : Knowledge Base module created
- End of Week 8 : Basic calendar module created with ability to add basic events 
