


$('button').on('click', async function() {
    const inp = $('input').val();
    await $.post('/word', {word: inp})
    const words = await $.get('/words')
    $('.results').empty()
    for(let w of words)
    {
        $('.results').append(`<div>${w.word}</div>`)
    }

})