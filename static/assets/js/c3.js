var chart = c3.generate({
    bindto: '#lead_time',
    data: {
        x: 'Week',
        url: '/static/assets/data/lead_time.csv',
        type: 'bar',
        labels: {
            format: {
                'Late': d3.format()}},
        groups: [
           ['Over 4 Days Early','3 Days Early','2 Days Early','1 Day Early','On Time','Late']],
            order: null
        },
    size:{
        height: 500
        },
    axis: {
        x: {
            label: 'Week',
            type: 'category'}}
});


var chart = c3.generate({
    bindto: '#throughput',
    data: {
        x: 'Week',
        url: '/static/assets/data/throughput_time.csv',
        labels: true
        },
    size:{
        height: 500
        },
    axis: {
        x: {
            label: 'Week',
            type: 'category'}}
});

var chart = c3.generate({
    bindto: '#reprint_rate',
    data: {
        x: 'Week',
        url: '/static/assets/data/reprint_rate.csv',
        labels: true
        },
    size:{
        height: 500
        },
    axis: {
        x: {
            label: 'Week',
            type: 'category'}}
});
