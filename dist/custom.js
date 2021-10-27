var tasks = [
    {
        start: '2021-10-25',
        end: '2021-11-08',
        name: 'Redesign website',
        id: "Task 0",
        progress: 25,
        assignableUsers: [
            'Jack',
            'John',
            'Jane'
        ],
        cancelled: false
    },
    {
        start: '2021-10-25',
        end: '2021-11-06',
        name: 'Write new content',
        id: "Task 1",
        progress: 56,
        dependencies: 'Task 0',
        cancelled: false
    },
    {
        start: '2021-10-25',
        end: '2021-11-08',
        name: 'Apply new styles',
        id: "Task 2",
        progress: 12,
        dependencies: 'Task 1',
        assignableUsers: [
            'Smith',
            'John',
            'Micle'
        ],
        cancelled: false
    },
    {
        start: '2021-10-25',
        end: '2021-11-09',
        name: 'Review',
        id: "Task 3",
        progress: 14,
        dependencies: 'Task 2',
        cancelled: false
    },
    {
        start: '2021-10-25',
        end: '2021-11-10',
        name: 'Deploy',
        id: "Task 4",
        progress: 15,
        dependencies: 'Task 2',
        cancelled: false
    },
    {
        start: '2021-10-25',
        end: '2021-11-11',
        name: 'Go Live!',
        id: "Task 5",
        progress: 100,
        dependencies: 'Task 4',
        cancelled: false
    },
    {
        start: '2021-10-25',
        end: '2021-11-12',
        name: 'Long term task',
        id: "Task 6",
        progress: 40,
        cancelled: false
    }
]