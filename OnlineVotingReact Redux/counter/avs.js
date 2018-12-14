var url = 'http://localhost:3000/quiz1'
    	fetch(url).then(function(response) {
    		if(response.status >=400){
    			throw new Error("Bad response form server");
    		}
    		return response.json();
    	})
    	.then(function(data){
    		that.setState({
    			question: data
    		});
    		that.state.question.map(function(qn,j){
          		that.state.correctAnswers[j] = qn.answer;
        	})
    	});