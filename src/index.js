window.onload = () => {
    console.log('loaded')

    // let cells = <GET ALL cell ELEMENTS>
    let cell = document.getElementsByClassName('cell-x')[0]
    let cell1 = document.getElementsByClassName('cell1')[0]
    let cell2 = document.getElementsByClassName('cell2')[0]
    let cell3 = document.getElementsByClassName('cell3')[0]
    let cell4 = document.getElementsByClassName('cell4')[0]
    let cell5 = document.getElementsByClassName('cell5')[0]
    let cell6 = document.getElementsByClassName('cell6')[0]
    let cell7 = document.getElementsByClassName('cell7')[0]
    let cell8 = document.getElementsByClassName('cell8')[0]
    // for (const cell of cells) {
        cell.onclick = (event) => {

                const [, x, y] = event.target.id.split('-')
                console.log(`click on ${x}:${y}`)
                if (cell.className === 'cell')
                    cell.className = 'cell-o'
                else {
                    if (cell.className === 'cell-o')
                        cell.className = 'cell-x'
                    else
                        cell.className = 'cell-o'
                }
                
                
            


        }

        cell1.onclick = (event) => {

                const [, x, y] = event.target.id.split('-')
                console.log(`click on ${x}:${y}`)
                if (cell1.className === 'cell')
                    cell1.className = 'cell-o'
                else {
                    if (cell1.className === 'cell-o')
                        cell1.className = 'cell-x'
                    else
                        cell1.className = 'cell-o'
                }
                
                
            }

            cell2.onclick = (event) => {

                const [, x, y] = event.target.id.split('-')
                console.log(`click on ${x}:${y}`)
                if (cell2.className === 'cell')
                    cell2.className = 'cell-o'
                else {
                    if (cell2.className === 'cell-o')
                        cell2.className = 'cell-x'
                    else
                        cell2.className = 'cell-o'
                }
                
                
            }

            cell3.onclick = (event) => {

                const [, x, y] = event.target.id.split('-')
                console.log(`click on ${x}:${y}`)
                if (cell3.className === 'cell')
                    cell3.className = 'cell-o'
                else {
                    if (cell3.className === 'cell-o')
                        cell3.className = 'cell-x'
                    else
                        cell3.className = 'cell-o'
                }
                
                
            }

            cell4.onclick = (event) => {

                const [, x, y] = event.target.id.split('-')
                console.log(`click on ${x}:${y}`)
                if (cell4.className === 'cell')
                    cell4.className = 'cell-o'
                else {
                    if (cell4.className === 'cell-o')
                        cell4.className = 'cell-x'
                    else
                        cell4.className = 'cell-o'
                }
                
                
            }

            cell5.onclick = (event) => {

                const [, x, y] = event.target.id.split('-')
                console.log(`click on ${x}:${y}`)
                if (cell5.className === 'cell')
                    cell5.className = 'cell-o'
                else {
                    if (cell5.className === 'cell-o')
                        cell5.className = 'cell-x'
                    else
                        cell5.className = 'cell-o'
                }
                
                
            }

            cell6.onclick = (event) => {

                const [, x, y] = event.target.id.split('-')
                console.log(`click on ${x}:${y}`)
                if (cell6.className === 'cell')
                    cell6.className = 'cell-o'
                else {
                    if (cell6.className === 'cell-o')
                        cell6.className = 'cell-x'
                    else
                        cell6.className = 'cell-o'
                }
                
                
            }

            cell7.onclick = (event) => {

                const [, x, y] = event.target.id.split('-')
                console.log(`click on ${x}:${y}`)
                if (cell7.className === 'cell')
                    cell7.className = 'cell-o'
                else {
                    if (cell7.className === 'cell-o')
                        cell7.className = 'cell-x'
                    else
                        cell7.className = 'cell-o'
                }
                
                
            }

            cell8.onclick = (event) => {

                const [, x, y] = event.target.id.split('-')
                console.log(`click on ${x}:${y}`)
                if (cell8.className === 'cell')
                    cell8.className = 'cell-o'
                else {
                    if (cell8.className === 'cell-o')
                        cell8.className = 'cell-x'
                    else
                        cell8.className = 'cell-o'
                }
                
                
            }

        }

    // }

