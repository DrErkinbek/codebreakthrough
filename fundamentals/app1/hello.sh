NAME="Erkinbek"
echo "hello, $NAME?"

count_up_to(){
	count=1
	while [$count -le 10]; do
		echo "the count is $count"
		count=$((count + 1))
		done
}

count_up_to $1
echo "Script name: $0"
echo "First argument" $1"
echo "All arguments: $@"