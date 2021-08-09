export const recommendationSystem = [
    [
        {
            "issue_id": "11147",
            "issue_key": "PITL1-17",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "1.0000",
            "reporter": "saury.pande@tum.de",
            "summary": "Jira - Recommendation System: Finding developers who has previously worked on related incidents/bugs",
            "description": "Usually in support providing companies, all the raised bugs/incidents are first assigned to a manager who then allocates them to a correct developer.\r\n\r\n\r\nMaking use of NLP and finding the similarity between the bugs/incidents reported. A recommender system can be developed where we can use pre-trained NLP model like BERT which can help us find incidents/bugs similarity which could be further used in suggesting developers who had previously worked on similar types of bugs/incidents."
        },
        {
            "issue_id": "11152",
            "issue_key": "PITL1-22",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.5719",
            "reporter": "saury.pande@tum.de",
            "summary": "Fetching related incidents/bugs similar to a new assigned incident",
            "description": "Usually when a developer is assigned a task/incident/bug for which he has no idea how to resolve. The developer tries to find older similar incidents which have been solved because most of the time bugs are in that area of code base.\r\n\r\nBuild a system which will try to find similar related incidents/bugs. I guess this can be achieved by applying NLP models of\u00a0 text similarity.\r\n\r\nFuture scope: We can extend it for finding any related discussions that have taken place related to those solved incidents in Slack.\r\n\r\n\u00a0"
        },
        {
            "issue_id": "11146",
            "issue_key": "PITL1-16",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.4573",
            "reporter": "saury.pande@tum.de",
            "summary": "Make use of ML and analyze an individual performance",
            "description": "Make use of available data from Github, Slack, Confluence and Jira and evaluate individual performance using ML and NLP.\u00a0 Parameters which we can use:\r\n # Number of incidents/Bugs/Stories assigned to the person.\r\n # Average time taken by the individual to complete those incidents.\r\n # How active a person is on tools like slack, github, jira.\r\n # Number of code reviews done by the person.\r\n # Number of meetings the person is part off.\r\n # Number of lines of code written by the individual.\r\n # Number of documentation the person is part off."
        },
        {
            "issue_id": "11151",
            "issue_key": "PITL1-21",
            "assignee": "zhiyiniu",
            "similarity_score": "0.4404",
            "reporter": "zhiyiniu",
            "summary": "Jira - While developing, if the developer is blocked by some problems, suggest the people who will be most helpful to find solutions",
            "description": "* All project experiences and knowledge of each developer can be collected"
        }
    ],
    [
        {
            "issue_id": "11110",
            "issue_key": "PITL1-11",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "1.0000",
            "reporter": "n.moghadam@tum.de",
            "summary": "Jira & Git - Detect developer workload & overtime by analyzing commit times and how long jira tasks are open before finished",
            "description": "Jira data, git data\r\n\r\nML Model"
        },
        {
            "issue_id": "11111",
            "issue_key": "PITL1-12",
            "assignee": "ga65hif",
            "similarity_score": "0.7281",
            "reporter": "n.moghadam@tum.de",
            "summary": "Jira - Detect which task take very long and potentially hold up other tasks and project progress",
            "description": "Jira data\r\n\r\nML Model, anomaly detection"
        },
        {
            "issue_id": "11314",
            "issue_key": "PITL1-50",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.5577",
            "reporter": "saury.pande@tum.de",
            "summary": "Analysis of Jira data and use NLP model to find similar incidents to a newly created incident",
            "description": "1. Preprocess and clean the Jira data.\r\n\r\n2. Try various NLP models.\r\n\r\n3. Generate the similarity scores.\r\n\r\n4. Plot the final result in Pie Chart."
        },
        {
            "issue_id": "11146",
            "issue_key": "PITL1-16",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.4280",
            "reporter": "saury.pande@tum.de",
            "summary": "Make use of ML and analyze an individual performance",
            "description": "Make use of available data from Github, Slack, Confluence and Jira and evaluate individual performance using ML and NLP.\u00a0 Parameters which we can use:\r\n # Number of incidents/Bugs/Stories assigned to the person.\r\n # Average time taken by the individual to complete those incidents.\r\n # How active a person is on tools like slack, github, jira.\r\n # Number of code reviews done by the person.\r\n # Number of meetings the person is part off.\r\n # Number of lines of code written by the individual.\r\n # Number of documentation the person is part off."
        }
    ],
    [
        {
            "issue_id": "11151",
            "issue_key": "PITL1-21",
            "assignee": "zhiyiniu",
            "similarity_score": "1.0000",
            "reporter": "zhiyiniu",
            "summary": "Jira - While developing, if the developer is blocked by some problems, suggest the people who will be most helpful to find solutions",
            "description": "* All project experiences and knowledge of each developer can be collected"
        },
        {
            "issue_id": "11147",
            "issue_key": "PITL1-17",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.4404",
            "reporter": "saury.pande@tum.de",
            "summary": "Jira - Recommendation System: Finding developers who has previously worked on related incidents/bugs",
            "description": "Usually in support providing companies, all the raised bugs/incidents are first assigned to a manager who then allocates them to a correct developer.\r\n\r\n\r\nMaking use of NLP and finding the similarity between the bugs/incidents reported. A recommender system can be developed where we can use pre-trained NLP model like BERT which can help us find incidents/bugs similarity which could be further used in suggesting developers who had previously worked on similar types of bugs/incidents."
        },
        {
            "issue_id": "11150",
            "issue_key": "PITL1-20",
            "assignee": "zhiyiniu",
            "similarity_score": "0.3975",
            "reporter": "zhiyiniu",
            "summary": "Check code cleanness and if it is understandable for others",
            "description": "* Variable names\u00a0\r\n * Function names\r\n * Use of help functions\r\n * A code understandability/code quality / etc score can be given to each developer\r\n * Developers can/cannot see scores of other developers, but if they do, the developers are notified that the data has been accessed (for privacy reasons)"
        },
        {
            "issue_id": "11146",
            "issue_key": "PITL1-16",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.3624",
            "reporter": "saury.pande@tum.de",
            "summary": "Make use of ML and analyze an individual performance",
            "description": "Make use of available data from Github, Slack, Confluence and Jira and evaluate individual performance using ML and NLP.\u00a0 Parameters which we can use:\r\n # Number of incidents/Bugs/Stories assigned to the person.\r\n # Average time taken by the individual to complete those incidents.\r\n # How active a person is on tools like slack, github, jira.\r\n # Number of code reviews done by the person.\r\n # Number of meetings the person is part off.\r\n # Number of lines of code written by the individual.\r\n # Number of documentation the person is part off."
        }
    ],
    [
        {
            "issue_id": "11109",
            "issue_key": "PITL1-10",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "1.0000",
            "reporter": "n.moghadam@tum.de",
            "summary": "Web - Dashboard where employee can block specific people/everyone from accessing their data by data type (e.g. slack, git, jira)",
            "description": "Database with user preferences\r\n\r\nweb interface\r\n\r\nbackend function (e.g. serverless nodejs)"
        },
        {
            "issue_id": "11108",
            "issue_key": "PITL1-9",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.5399",
            "reporter": "n.moghadam@tum.de",
            "summary": "Web - Privacy Dashboard with an overview of who requested what kind of information at which time for what reason and on what level (personal/aggregated data)",
            "description": "Tools:\r\n\r\nWebapp Table\r\n\r\nDatabase to store data access by other employees"
        },
        {
            "issue_id": "11149",
            "issue_key": "PITL1-19",
            "assignee": "zhiyiniu",
            "similarity_score": "0.4218",
            "reporter": "zhiyiniu",
            "summary": "Detect the quality of the code, especially the dangerous lines of code",
            "description": "* When a developer works with a database, detect if there are commands like drop table, delete from, etc.\r\n * If the a password is saved directly as plain text in code"
        },
        {
            "issue_id": "11110",
            "issue_key": "PITL1-11",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.3993",
            "reporter": "n.moghadam@tum.de",
            "summary": "Jira & Git - Detect developer workload & overtime by analyzing commit times and how long jira tasks are open before finished",
            "description": "Jira data, git data\r\n\r\nML Model"
        }
    ],
    [
        {
            "issue_id": "11108",
            "issue_key": "PITL1-9",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "1.0000",
            "reporter": "n.moghadam@tum.de",
            "summary": "Web - Privacy Dashboard with an overview of who requested what kind of information at which time for what reason and on what level (personal/aggregated data)",
            "description": "Tools:\r\n\r\nWebapp Table\r\n\r\nDatabase to store data access by other employees"
        },
        {
            "issue_id": "11109",
            "issue_key": "PITL1-10",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.5399",
            "reporter": "n.moghadam@tum.de",
            "summary": "Web - Dashboard where employee can block specific people/everyone from accessing their data by data type (e.g. slack, git, jira)",
            "description": "Database with user preferences\r\n\r\nweb interface\r\n\r\nbackend function (e.g. serverless nodejs)"
        },
        {
            "issue_id": "11150",
            "issue_key": "PITL1-20",
            "assignee": "zhiyiniu",
            "similarity_score": "0.4090",
            "reporter": "zhiyiniu",
            "summary": "Check code cleanness and if it is understandable for others",
            "description": "* Variable names\u00a0\r\n * Function names\r\n * Use of help functions\r\n * A code understandability/code quality / etc score can be given to each developer\r\n * Developers can/cannot see scores of other developers, but if they do, the developers are notified that the data has been accessed (for privacy reasons)"
        },
        {
            "issue_id": "11146",
            "issue_key": "PITL1-16",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.3865",
            "reporter": "saury.pande@tum.de",
            "summary": "Make use of ML and analyze an individual performance",
            "description": "Make use of available data from Github, Slack, Confluence and Jira and evaluate individual performance using ML and NLP.\u00a0 Parameters which we can use:\r\n # Number of incidents/Bugs/Stories assigned to the person.\r\n # Average time taken by the individual to complete those incidents.\r\n # How active a person is on tools like slack, github, jira.\r\n # Number of code reviews done by the person.\r\n # Number of meetings the person is part off.\r\n # Number of lines of code written by the individual.\r\n # Number of documentation the person is part off."
        }
    ],
    [
        {
            "issue_id": "11107",
            "issue_key": "PITL1-8",
            "assignee": "zhiyiniu",
            "similarity_score": "1.0000",
            "reporter": "n.moghadam@tum.de",
            "summary": "Slack - Detect if developer is aggressive towards colleagues with sentiment analysis and slack",
            "description": "Tools:\u00a0\r\n\r\nSlack data\r\n\r\nSentiment analysis model\r\n\r\n\u00a0"
        },
        {
            "issue_id": "11314",
            "issue_key": "PITL1-50",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.4637",
            "reporter": "saury.pande@tum.de",
            "summary": "Analysis of Jira data and use NLP model to find similar incidents to a newly created incident",
            "description": "1. Preprocess and clean the Jira data.\r\n\r\n2. Try various NLP models.\r\n\r\n3. Generate the similarity scores.\r\n\r\n4. Plot the final result in Pie Chart."
        },
        {
            "issue_id": "11146",
            "issue_key": "PITL1-16",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.4161",
            "reporter": "saury.pande@tum.de",
            "summary": "Make use of ML and analyze an individual performance",
            "description": "Make use of available data from Github, Slack, Confluence and Jira and evaluate individual performance using ML and NLP.\u00a0 Parameters which we can use:\r\n # Number of incidents/Bugs/Stories assigned to the person.\r\n # Average time taken by the individual to complete those incidents.\r\n # How active a person is on tools like slack, github, jira.\r\n # Number of code reviews done by the person.\r\n # Number of meetings the person is part off.\r\n # Number of lines of code written by the individual.\r\n # Number of documentation the person is part off."
        },
        {
            "issue_id": "11110",
            "issue_key": "PITL1-11",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.4153",
            "reporter": "n.moghadam@tum.de",
            "summary": "Jira & Git - Detect developer workload & overtime by analyzing commit times and how long jira tasks are open before finished",
            "description": "Jira data, git data\r\n\r\nML Model"
        }
    ],
    [
        {
            "issue_id": "11111",
            "issue_key": "PITL1-12",
            "assignee": "ga65hif",
            "similarity_score": "1.0000",
            "reporter": "n.moghadam@tum.de",
            "summary": "Jira - Detect which task take very long and potentially hold up other tasks and project progress",
            "description": "Jira data\r\n\r\nML Model, anomaly detection"
        },
        {
            "issue_id": "11110",
            "issue_key": "PITL1-11",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.7281",
            "reporter": "n.moghadam@tum.de",
            "summary": "Jira & Git - Detect developer workload & overtime by analyzing commit times and how long jira tasks are open before finished",
            "description": "Jira data, git data\r\n\r\nML Model"
        },
        {
            "issue_id": "11314",
            "issue_key": "PITL1-50",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.5285",
            "reporter": "saury.pande@tum.de",
            "summary": "Analysis of Jira data and use NLP model to find similar incidents to a newly created incident",
            "description": "1. Preprocess and clean the Jira data.\r\n\r\n2. Try various NLP models.\r\n\r\n3. Generate the similarity scores.\r\n\r\n4. Plot the final result in Pie Chart."
        },
        {
            "issue_id": "11107",
            "issue_key": "PITL1-8",
            "assignee": "zhiyiniu",
            "similarity_score": "0.4002",
            "reporter": "n.moghadam@tum.de",
            "summary": "Slack - Detect if developer is aggressive towards colleagues with sentiment analysis and slack",
            "description": "Tools:\u00a0\r\n\r\nSlack data\r\n\r\nSentiment analysis model\r\n\r\n\u00a0"
        }
    ],
    [
        {
            "issue_id": "11292",
            "issue_key": "PITL1-48",
            "assignee": "ga65hif",
            "similarity_score": "1.0000",
            "reporter": "ga65hif",
            "summary": "Estimated response time (for slack messages)",
            "description": "Using machine learning to generate estimated response time based on the current time of day for each developer."
        },
        {
            "issue_id": "11148",
            "issue_key": "PITL1-18",
            "assignee": "zhiyiniu",
            "similarity_score": "0.4688",
            "reporter": "zhiyiniu",
            "summary": "Estimate project delivery time based on other projects",
            "description": "* At the beginning of a project, if a person doesn\u2019t have any experience with such a project, but the project manager wants to know how much time do you need to finish this project.\r\n\r\n * Estimate how long it would take for a developer to complete a project based on how long other developers took to complete similar projects previously\r\n * Using ML to analyse:\r\n * How much time did other similar project take\r\n * Number of teammates in other similar projects and their experience level\r\n * How much work (coding) the developer has previously done in areas similar to the project"
        },
        {
            "issue_id": "11146",
            "issue_key": "PITL1-16",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.3922",
            "reporter": "saury.pande@tum.de",
            "summary": "Make use of ML and analyze an individual performance",
            "description": "Make use of available data from Github, Slack, Confluence and Jira and evaluate individual performance using ML and NLP.\u00a0 Parameters which we can use:\r\n # Number of incidents/Bugs/Stories assigned to the person.\r\n # Average time taken by the individual to complete those incidents.\r\n # How active a person is on tools like slack, github, jira.\r\n # Number of code reviews done by the person.\r\n # Number of meetings the person is part off.\r\n # Number of lines of code written by the individual.\r\n # Number of documentation the person is part off."
        },
        {
            "issue_id": "11147",
            "issue_key": "PITL1-17",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.3667",
            "reporter": "saury.pande@tum.de",
            "summary": "Jira - Recommendation System: Finding developers who has previously worked on related incidents/bugs",
            "description": "Usually in support providing companies, all the raised bugs/incidents are first assigned to a manager who then allocates them to a correct developer.\r\n\r\n\r\nMaking use of NLP and finding the similarity between the bugs/incidents reported. A recommender system can be developed where we can use pre-trained NLP model like BERT which can help us find incidents/bugs similarity which could be further used in suggesting developers who had previously worked on similar types of bugs/incidents."
        }
    ],
    [
        {
            "issue_id": "11314",
            "issue_key": "PITL1-50",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "1.0000",
            "reporter": "saury.pande@tum.de",
            "summary": "Analysis of Jira data and use NLP model to find similar incidents to a newly created incident",
            "description": "1. Preprocess and clean the Jira data.\r\n\r\n2. Try various NLP models.\r\n\r\n3. Generate the similarity scores.\r\n\r\n4. Plot the final result in Pie Chart."
        },
        {
            "issue_id": "11110",
            "issue_key": "PITL1-11",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.5577",
            "reporter": "n.moghadam@tum.de",
            "summary": "Jira & Git - Detect developer workload & overtime by analyzing commit times and how long jira tasks are open before finished",
            "description": "Jira data, git data\r\n\r\nML Model"
        },
        {
            "issue_id": "11111",
            "issue_key": "PITL1-12",
            "assignee": "ga65hif",
            "similarity_score": "0.5285",
            "reporter": "n.moghadam@tum.de",
            "summary": "Jira - Detect which task take very long and potentially hold up other tasks and project progress",
            "description": "Jira data\r\n\r\nML Model, anomaly detection"
        },
        {
            "issue_id": "11107",
            "issue_key": "PITL1-8",
            "assignee": "zhiyiniu",
            "similarity_score": "0.4637",
            "reporter": "n.moghadam@tum.de",
            "summary": "Slack - Detect if developer is aggressive towards colleagues with sentiment analysis and slack",
            "description": "Tools:\u00a0\r\n\r\nSlack data\r\n\r\nSentiment analysis model\r\n\r\n\u00a0"
        }
    ],
    [
        {
            "issue_id": "11152",
            "issue_key": "PITL1-22",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "1.0000",
            "reporter": "saury.pande@tum.de",
            "summary": "Fetching related incidents/bugs similar to a new assigned incident",
            "description": "Usually when a developer is assigned a task/incident/bug for which he has no idea how to resolve. The developer tries to find older similar incidents which have been solved because most of the time bugs are in that area of code base.\r\n\r\nBuild a system which will try to find similar related incidents/bugs. I guess this can be achieved by applying NLP models of\u00a0 text similarity.\r\n\r\nFuture scope: We can extend it for finding any related discussions that have taken place related to those solved incidents in Slack.\r\n\r\n\u00a0"
        },
        {
            "issue_id": "11147",
            "issue_key": "PITL1-17",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.5719",
            "reporter": "saury.pande@tum.de",
            "summary": "Jira - Recommendation System: Finding developers who has previously worked on related incidents/bugs",
            "description": "Usually in support providing companies, all the raised bugs/incidents are first assigned to a manager who then allocates them to a correct developer.\r\n\r\n\r\nMaking use of NLP and finding the similarity between the bugs/incidents reported. A recommender system can be developed where we can use pre-trained NLP model like BERT which can help us find incidents/bugs similarity which could be further used in suggesting developers who had previously worked on similar types of bugs/incidents."
        },
        {
            "issue_id": "11148",
            "issue_key": "PITL1-18",
            "assignee": "zhiyiniu",
            "similarity_score": "0.3814",
            "reporter": "zhiyiniu",
            "summary": "Estimate project delivery time based on other projects",
            "description": "* At the beginning of a project, if a person doesn\u2019t have any experience with such a project, but the project manager wants to know how much time do you need to finish this project.\r\n\r\n * Estimate how long it would take for a developer to complete a project based on how long other developers took to complete similar projects previously\r\n * Using ML to analyse:\r\n * How much time did other similar project take\r\n * Number of teammates in other similar projects and their experience level\r\n * How much work (coding) the developer has previously done in areas similar to the project"
        },
        {
            "issue_id": "11131",
            "issue_key": "PITL1-13",
            "assignee": "ga65hif",
            "similarity_score": "0.3761",
            "reporter": "ga65hif",
            "summary": "Detect false attribution",
            "description": "Use machine learning to identify if a new code is originating from the programmer, to find out if some use the work of others to appear more competent.\r\n\r\nRelated work: https://arxiv.org/pdf/1701.05681.pdf"
        }
    ],
    [
        {
            "issue_id": "11149",
            "issue_key": "PITL1-19",
            "assignee": "zhiyiniu",
            "similarity_score": "1.0000",
            "reporter": "zhiyiniu",
            "summary": "Detect the quality of the code, especially the dangerous lines of code",
            "description": "* When a developer works with a database, detect if there are commands like drop table, delete from, etc.\r\n * If the a password is saved directly as plain text in code"
        },
        {
            "issue_id": "11150",
            "issue_key": "PITL1-20",
            "assignee": "zhiyiniu",
            "similarity_score": "0.5091",
            "reporter": "zhiyiniu",
            "summary": "Check code cleanness and if it is understandable for others",
            "description": "* Variable names\u00a0\r\n * Function names\r\n * Use of help functions\r\n * A code understandability/code quality / etc score can be given to each developer\r\n * Developers can/cannot see scores of other developers, but if they do, the developers are notified that the data has been accessed (for privacy reasons)"
        },
        {
            "issue_id": "11109",
            "issue_key": "PITL1-10",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.4218",
            "reporter": "n.moghadam@tum.de",
            "summary": "Web - Dashboard where employee can block specific people/everyone from accessing their data by data type (e.g. slack, git, jira)",
            "description": "Database with user preferences\r\n\r\nweb interface\r\n\r\nbackend function (e.g. serverless nodejs)"
        },
        {
            "issue_id": "11147",
            "issue_key": "PITL1-17",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.4003",
            "reporter": "saury.pande@tum.de",
            "summary": "Jira - Recommendation System: Finding developers who has previously worked on related incidents/bugs",
            "description": "Usually in support providing companies, all the raised bugs/incidents are first assigned to a manager who then allocates them to a correct developer.\r\n\r\n\r\nMaking use of NLP and finding the similarity between the bugs/incidents reported. A recommender system can be developed where we can use pre-trained NLP model like BERT which can help us find incidents/bugs similarity which could be further used in suggesting developers who had previously worked on similar types of bugs/incidents."
        }
    ],
    [
        {
            "issue_id": "11150",
            "issue_key": "PITL1-20",
            "assignee": "zhiyiniu",
            "similarity_score": "1.0000",
            "reporter": "zhiyiniu",
            "summary": "Check code cleanness and if it is understandable for others",
            "description": "* Variable names\u00a0\r\n * Function names\r\n * Use of help functions\r\n * A code understandability/code quality / etc score can be given to each developer\r\n * Developers can/cannot see scores of other developers, but if they do, the developers are notified that the data has been accessed (for privacy reasons)"
        },
        {
            "issue_id": "11149",
            "issue_key": "PITL1-19",
            "assignee": "zhiyiniu",
            "similarity_score": "0.5091",
            "reporter": "zhiyiniu",
            "summary": "Detect the quality of the code, especially the dangerous lines of code",
            "description": "* When a developer works with a database, detect if there are commands like drop table, delete from, etc.\r\n * If the a password is saved directly as plain text in code"
        },
        {
            "issue_id": "11147",
            "issue_key": "PITL1-17",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.4382",
            "reporter": "saury.pande@tum.de",
            "summary": "Jira - Recommendation System: Finding developers who has previously worked on related incidents/bugs",
            "description": "Usually in support providing companies, all the raised bugs/incidents are first assigned to a manager who then allocates them to a correct developer.\r\n\r\n\r\nMaking use of NLP and finding the similarity between the bugs/incidents reported. A recommender system can be developed where we can use pre-trained NLP model like BERT which can help us find incidents/bugs similarity which could be further used in suggesting developers who had previously worked on similar types of bugs/incidents."
        },
        {
            "issue_id": "11108",
            "issue_key": "PITL1-9",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.4090",
            "reporter": "n.moghadam@tum.de",
            "summary": "Web - Privacy Dashboard with an overview of who requested what kind of information at which time for what reason and on what level (personal/aggregated data)",
            "description": "Tools:\r\n\r\nWebapp Table\r\n\r\nDatabase to store data access by other employees"
        }
    ],
    [
        {
            "issue_id": "11146",
            "issue_key": "PITL1-16",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "1.0000",
            "reporter": "saury.pande@tum.de",
            "summary": "Make use of ML and analyze an individual performance",
            "description": "Make use of available data from Github, Slack, Confluence and Jira and evaluate individual performance using ML and NLP.\u00a0 Parameters which we can use:\r\n # Number of incidents/Bugs/Stories assigned to the person.\r\n # Average time taken by the individual to complete those incidents.\r\n # How active a person is on tools like slack, github, jira.\r\n # Number of code reviews done by the person.\r\n # Number of meetings the person is part off.\r\n # Number of lines of code written by the individual.\r\n # Number of documentation the person is part off."
        },
        {
            "issue_id": "11147",
            "issue_key": "PITL1-17",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.4573",
            "reporter": "saury.pande@tum.de",
            "summary": "Jira - Recommendation System: Finding developers who has previously worked on related incidents/bugs",
            "description": "Usually in support providing companies, all the raised bugs/incidents are first assigned to a manager who then allocates them to a correct developer.\r\n\r\n\r\nMaking use of NLP and finding the similarity between the bugs/incidents reported. A recommender system can be developed where we can use pre-trained NLP model like BERT which can help us find incidents/bugs similarity which could be further used in suggesting developers who had previously worked on similar types of bugs/incidents."
        },
        {
            "issue_id": "11314",
            "issue_key": "PITL1-50",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.4562",
            "reporter": "saury.pande@tum.de",
            "summary": "Analysis of Jira data and use NLP model to find similar incidents to a newly created incident",
            "description": "1. Preprocess and clean the Jira data.\r\n\r\n2. Try various NLP models.\r\n\r\n3. Generate the similarity scores.\r\n\r\n4. Plot the final result in Pie Chart."
        },
        {
            "issue_id": "11110",
            "issue_key": "PITL1-11",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.4280",
            "reporter": "n.moghadam@tum.de",
            "summary": "Jira & Git - Detect developer workload & overtime by analyzing commit times and how long jira tasks are open before finished",
            "description": "Jira data, git data\r\n\r\nML Model"
        }
    ],
    [
        {
            "issue_id": "11131",
            "issue_key": "PITL1-13",
            "assignee": "ga65hif",
            "similarity_score": "1.0000",
            "reporter": "ga65hif",
            "summary": "Detect false attribution",
            "description": "Use machine learning to identify if a new code is originating from the programmer, to find out if some use the work of others to appear more competent.\r\n\r\nRelated work: https://arxiv.org/pdf/1701.05681.pdf"
        },
        {
            "issue_id": "11146",
            "issue_key": "PITL1-16",
            "assignee": "n.moghadam@tum.de",
            "similarity_score": "0.3979",
            "reporter": "saury.pande@tum.de",
            "summary": "Make use of ML and analyze an individual performance",
            "description": "Make use of available data from Github, Slack, Confluence and Jira and evaluate individual performance using ML and NLP.\u00a0 Parameters which we can use:\r\n # Number of incidents/Bugs/Stories assigned to the person.\r\n # Average time taken by the individual to complete those incidents.\r\n # How active a person is on tools like slack, github, jira.\r\n # Number of code reviews done by the person.\r\n # Number of meetings the person is part off.\r\n # Number of lines of code written by the individual.\r\n # Number of documentation the person is part off."
        },
        {
            "issue_id": "11152",
            "issue_key": "PITL1-22",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.3761",
            "reporter": "saury.pande@tum.de",
            "summary": "Fetching related incidents/bugs similar to a new assigned incident",
            "description": "Usually when a developer is assigned a task/incident/bug for which he has no idea how to resolve. The developer tries to find older similar incidents which have been solved because most of the time bugs are in that area of code base.\r\n\r\nBuild a system which will try to find similar related incidents/bugs. I guess this can be achieved by applying NLP models of\u00a0 text similarity.\r\n\r\nFuture scope: We can extend it for finding any related discussions that have taken place related to those solved incidents in Slack.\r\n\r\n\u00a0"
        },
        {
            "issue_id": "11147",
            "issue_key": "PITL1-17",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.3660",
            "reporter": "saury.pande@tum.de",
            "summary": "Jira - Recommendation System: Finding developers who has previously worked on related incidents/bugs",
            "description": "Usually in support providing companies, all the raised bugs/incidents are first assigned to a manager who then allocates them to a correct developer.\r\n\r\n\r\nMaking use of NLP and finding the similarity between the bugs/incidents reported. A recommender system can be developed where we can use pre-trained NLP model like BERT which can help us find incidents/bugs similarity which could be further used in suggesting developers who had previously worked on similar types of bugs/incidents."
        }
    ],
    [
        {
            "issue_id": "11148",
            "issue_key": "PITL1-18",
            "assignee": "zhiyiniu",
            "similarity_score": "1.0000",
            "reporter": "zhiyiniu",
            "summary": "Estimate project delivery time based on other projects",
            "description": "* At the beginning of a project, if a person doesn\u2019t have any experience with such a project, but the project manager wants to know how much time do you need to finish this project.\r\n\r\n * Estimate how long it would take for a developer to complete a project based on how long other developers took to complete similar projects previously\r\n * Using ML to analyse:\r\n * How much time did other similar project take\r\n * Number of teammates in other similar projects and their experience level\r\n * How much work (coding) the developer has previously done in areas similar to the project"
        },
        {
            "issue_id": "11292",
            "issue_key": "PITL1-48",
            "assignee": "ga65hif",
            "similarity_score": "0.4688",
            "reporter": "ga65hif",
            "summary": "Estimated response time (for slack messages)",
            "description": "Using machine learning to generate estimated response time based on the current time of day for each developer."
        },
        {
            "issue_id": "11152",
            "issue_key": "PITL1-22",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.3814",
            "reporter": "saury.pande@tum.de",
            "summary": "Fetching related incidents/bugs similar to a new assigned incident",
            "description": "Usually when a developer is assigned a task/incident/bug for which he has no idea how to resolve. The developer tries to find older similar incidents which have been solved because most of the time bugs are in that area of code base.\r\n\r\nBuild a system which will try to find similar related incidents/bugs. I guess this can be achieved by applying NLP models of\u00a0 text similarity.\r\n\r\nFuture scope: We can extend it for finding any related discussions that have taken place related to those solved incidents in Slack.\r\n\r\n\u00a0"
        },
        {
            "issue_id": "11147",
            "issue_key": "PITL1-17",
            "assignee": "saury.pande@tum.de",
            "similarity_score": "0.3653",
            "reporter": "saury.pande@tum.de",
            "summary": "Jira - Recommendation System: Finding developers who has previously worked on related incidents/bugs",
            "description": "Usually in support providing companies, all the raised bugs/incidents are first assigned to a manager who then allocates them to a correct developer.\r\n\r\n\r\nMaking use of NLP and finding the similarity between the bugs/incidents reported. A recommender system can be developed where we can use pre-trained NLP model like BERT which can help us find incidents/bugs similarity which could be further used in suggesting developers who had previously worked on similar types of bugs/incidents."
        }
    ]
]