let jobs = [
	{ 
		ID: 1,
		descricao: 'Importação de arquivos de fundos', 
      data_inicio: ' ',
		data_maxima_conclusao: '2021-02-04 12:00:00', 
		tempo_estimado: '8'
	},
	{ 
		ID: 2,
		descricao: 'Importação de dados da Base Legada', 
      data_inicio: ' ',
      data_maxima_conclusao: '2021-02-04 18:00:00', 
		tempo_estimado: '4'
	},
	{ 
		ID: 3,
		descricao: 'Importação de dados', 
      data_inicio: ' ',      
		data_maxima_conclusao: '2021-02-02 12:00:00', 
		tempo_estimado: '6'
	},
	{ 
		ID: 4,
		descricao: 'Desenvolver historia 745', 
      data_inicio: '',
      data_maxima_conclusao: '2021-02-02 12:00:00', 
		tempo_estimado: '2'
	},
	{ 
		ID: 5,
		descricao: 'Gerar QRCode', 
      data_inicio: '',
      data_maxima_conclusao: '2020-02-15 12:00:00', 
		tempo_estimado: '6'
	},
	{
		ID: 6,
		descricao: 'Importação de dados de integração', 
      data_inicio: '',
      data_maxima_conclusao: '2020-02-15 12:00:00', 
		tempo_estimado: '8'
	},
];

let dtConvert = 

jobs.sort(function(a, b) {
   return new Date(a.data_maxima_conclusao + a.tempo_estimado) - new Date(b.data_maxima_conclusao + b.tempo_estimado)
});


jobs.forEach( job => {
   console.log(`==== JOB ==== `);
   console.log(`ID: ${job.ID}\nDescrição: ${job.descricao}\nData de início: ${job.data_inicio}\nData máxima para conclusão: ${job.data_maxima_conclusao.substr(8,2)}/${job.data_maxima_conclusao.substr(5,2)}/${job.data_maxima_conclusao.substr(0,4)} as ${job.data_maxima_conclusao.substr(11,8)}\nTempo estimado para conclusão: ${job.tempo_estimado}`);
});