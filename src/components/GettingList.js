export async function loadData() {
    const res = await fetch('/api/GuestBook', {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET'
      })

    const data = await res.json()
    return data
}