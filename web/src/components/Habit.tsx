
interface HabitProps {
    completed: number
}

export function Habit(props: HabitProps) {
    return (
        <div className='bg-zinc-900 w-10 h-10 text-white'>{props.completed}</div>
    )
       
}