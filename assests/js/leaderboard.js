
// this is for entire leaderboard

    (function () {
        const localStorageGame = 'guessGame.scores';
        const table = document.getElementById('board');
        const tbody = document.getElementById('leaderboard_rows');
        const empty = document.getElementById('empty_state');
        const clearBtn = document.getElementById('clear_btn');
        const note = document.getElementById('last_saved_note');
    })();

    // reads scores and returns text in array
    function loadScores() {
        try {
        const list = JSON.parse(localStorage.getItem(localStorageGame) || '[]');
        return Array.isArray(list) ? list : [];
        } catch {
        // if nothing is there (no text) return empty
        return [];
        }
    }

        // save scores to localStorage
        function saveScores(list) {
            // convert array into text (wit 'JSON.stringify')
            localStorage.setItem(localStorageGame, JSON.stringify(list));
        }

        // calulate score/ratio
        function ratio(entry) {
            // need to have this so we do not divide bz 0
            const rollRatio = (entry.wins || 0) / (entry.rolls || 1);
            return Number.isFinite(rollRatio) ? rollRatio : 0;
        }

        // converting ratio to %
        function formatPct(entry) {
            return (ratio(entry) * 100).toFixed(1);
        }

        // to convert into format that can be read (ISO standards)
        function formatDate(iso) {
            try {
            const date_and_time = new Date(iso);
            return date_and_time.toLocaleString(undefined, { year:'numeric', month:'short', day:'2-digit', hour:'2-digit', minute:'2-digit' });
            } catch {
            return iso || '';
            }
        }

        
        function render() {
            const data = loadScores();

            if (!data.length) {
            table.hidden = true;
            empty.hidden = false;
            note.textContent = '';
            tbody.innerHTML = '';
            return;
            }

            // Sorting order (best first then recent)
            data.sort((a, b) => {
                const diff = ratio(b) - ratio(a);
                if (Math.abs(diff) > 1e-9) return diff;
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            });
            
            // storing scoring
            tbody.innerHTML = '';  // clear out, add new row for score
            data.forEach((row, i) => {  // go throug each score in data
                const tr = document.createElement('tr');  // create new row for string

                const rank = document.createElement('td');
                rank.textContent = String(i + 1);  // for rankin order (1, then 2nd)

                const score = document.createElement('td');
                score.textContent = `${row.wins}/${row.rolls}`;  // example 3/10

                const pct = document.createElement('td');
                pct.textContent = `${formatPct(row)}%`;  // % here
                pct.className = 'right';  // alignment (to right)

                const mode = document.createElement('td');
                mode.textContent = (row.mode || '').replace(/^./, c => c.toUpperCase());  // make uppercase 1st char

                const date = document.createElement('td');
                date.textContent = formatDate(row.date);  // formate date so it is user friendly

                tr.append(rank, score, pct, mode, date);  // take all elements and assamble row 
                tbody.appendChild(tr);
            });

            table.hidden = false;  // do not hide table
            empty.hidden = true;  // hide empy (to avoid unnecesary balnk rows)

            const last_collected_data = data[0];  // ceating last data collection (last game)
            note.textContent = last_collected_data ? `Most recent: ${last_collected_data.wins}/${last_collected_data.rolls} • ${formatPct(last_collected_data)}% • ${last_collected_data.mode} • ${formatDate(last_collected_data.date)}` : '';
        }
