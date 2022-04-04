import { useEffect, useState } from "react"

const useReview = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('fakeReview.json')
            .then(res => res.json())
            .then(users => setUsers(users))
    }, []);

    return [users, setUsers];
}

export default useReview