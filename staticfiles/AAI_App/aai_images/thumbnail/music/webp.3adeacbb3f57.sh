#! /bin/bash


while true
do
	
	echo -e "Enter file type i.e. jpg jpeg or png or for all Files in Folder type all : \c \n"
	read type


	if [ $type = "all" ]
	then
		for file in ./*; do cwebp -q 50 "$file" -o "${file%.*}.webp"; done

	elif [ $type = "jpg" ]
	then
		echo -e "Enter name of file without the extention i.e. file not file.jpg \n"
		read value
		cwebp -q 50 ${value}.jpg -o ${value}.webp

	elif [ $type = "jpeg" ]
	then
		echo -e "Enter name of file without the extention i.e. file not file.jpg \n"
		read value
		cwebp -q 50 ${value}.jpeg -o ${value}.webp

	elif [ $type = "png" ]
	then
		echo -e "Enter name of file without the extention i.e. file not file.jpg \n"
		read value
		cwebp -q 50 -exact ${value}.png -o ${value}.webp
	fi

	echo -e "All Done ... moving files now to webp/ \c \n"
	

	mv *.webp webp/

done




