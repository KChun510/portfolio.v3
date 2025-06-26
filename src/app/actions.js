async function readJSONFile() {
  try {
    const response = await fetch("/api/readfile", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error reading JSON file:", error);
    throw error;
  }
}

export const search_items = async (search_string) => {
  try {
    const res = await fetch('/api/spotify/search_spotify', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(search_string)
    })
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export const add_track = async (uri) => {
  try {
    const res = await fetch("/api/spotify/add_track_to_playlist", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(uri)
    })
    if (!res.status === 200) {
      throw new Error("Could not add track to playlist: ", res.status)
    }
    return true
  } catch (e) {
    console.error(e)
    return false
  }
}

export const get_top_items = async () => {
  try {
    const res = await fetch('/api/spotify/get_top_items', {
      method: "GET"
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

export const get_playlist = async () => {
  try {
    const res = await fetch('/api/spotify/get_playlist',
      {
        method: "GET"
      })
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export const get_currTrack = async () => {
  try {
    const res = await fetch('/api/spotify/get_current_track',
      {
        method: "GET"
      })
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export async function pullGitInfo() {
  const allGitInfo = await readJSONFile()
  return allGitInfo
}

export async function set_session(user_tag, song_names) {
  try {
    const res = await fetch("/api/session/set_session", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_tag,
        song_names
      })
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

export async function update_song_count_browser(count) {
  try {
    const res = await fetch("/api/session/update_session_song_count", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        count
      })
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

export async function get_session_browser() {
  try {
    const res = await fetch("/api/session/get_session", {
      method: "GET",
      credentials: "same-origin"
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

export async function get_session_db(session) {
  try {
    const res = await fetch("/api/session/get_session_db", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(session ?? null)
    })
    if (res) {
      const data = await res.json()
      return data
    }
    return null
  } catch (err) {
    console.error(err)
  }
}

export async function update_session(session_id, user_tag, song_names) {
  try {
    await fetch("/api/session/update_session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ session_id, user_tag, song_names })
    })
  } catch (err) {
    console.error(err)
  }
}

export async function get_song_count_browser() {
  try {
    const res = await fetch("/api/session/get_session_song_count", {
      method: "GET"
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

export async function select_all_session() {
  try {
    const res = await fetch("/api/session/select_all_session", {
      method: "GET"
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}

export async function remove_track_playlist(uri) {
  try {
    const res = await fetch("/api/spotify/remove_track_from_playlist", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify(uri)
    })
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}







