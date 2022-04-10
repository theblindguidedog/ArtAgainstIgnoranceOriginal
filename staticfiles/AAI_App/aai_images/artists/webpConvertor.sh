#! /bin/bash

jpg () { 

	while true
	do

		echo -e "Enter name of file without file extension \c";

		read file

		echo -e "You have chosen to convert ${file}.jpg \nIf you would like to proceed type y or else type n \c"
		read response

		if [[ $response = "y" ]]
		then
			echo -e "Converting ${file}.jpg to ${file}.webp now ...... \c "
			cwebp -q 50 "${file}.jpg" -o "${file}.webp";
			echo -e "Done \n"
			echo -e "If you would you like to move ${file}.webp to the directory webp/ please type y :\nOtherwise type n \c"
			read response
			if [ $response = "y" ]
			then
				mv ${file}.webp webp/
				echo -e "${file}.webp was successfully moved to webp/"
				exit
			elif [ $response = "n" ]
			then
				echo -e "Exiting Now... \n"
				continue
			else
				exit
			fi
		elif [[ $response = "n" ]]
		then
			continue
		else
			exit
		fi

	done

}

png () { 

	while true
	do

		echo -e "Enter name of file without file extension \c";

		read file

		echo -e "You have chosen to convert ${file}.png \nIf you would like to proceed type y or else type n : \c"
		read response

		if [[ $response = "y" ]]
		then
			echo -e "Converting ${file}.png to ${file}.webp now ...... \c "
			cwebp -q 50 -exact "${file}.png" -o "${file}.webp";
			echo -e "Done \n"
			echo -e "If you would you like to move ${file}.webp to the directory webp/\nplease type y :\nOtherwise type n : \c"
			read response
			if [ $response = "y" ]
			then
				mv ${file}.webp webp/
				echo -e "${file}.webp was successfully moved to webp/"
				exit
			elif [ $response = "n" ]
			then
				echo -e "Exiting Now... \n"
				continue
			else
				exit
			fi
		elif [[ $response = "n" ]]
		then
			continue
		else
			exit
		fi

	done

}

all () {

	while true
	do
		echo -e "You have chosen to convert all image files in this folder to .webp\nIf you would like to proceed type y or else type n : \c"
		read response
		if [ $response = "y" ]
		then
			echo -e "Copying & Converting all image files to .webp now ...... \c "
			for file in ./* 
			do 
				cwebp -q 50 -exact "$file" -o "${file%.*}.webp"
			done
			echo -e "Done \n"
			echo -e "If you would you like to move all .webp files to the directory webp/\nplease type y :\nOtherwise type n : \c"
				read response
				if [ $response = "y" ]
				then
					mv *.webp webp/
					echo -e "All .webp files were successfully moved to webp/"
					exit
				elif [ $response = "n" ]
				then
					echo -e "Exiting Now... \n"
					continue
				else
					exit
				fi
		fi
	done
}

echo -e "To convert a jpg file type jpg\nTo convert a png file type png\n\
To convert all files type all :\nTo exit press any other key : \c"
read n

if [ $n = "jpg" ]
then
	jpg
elif [ $n = "png" ]
then
	png
elif [ $n = "all" ]
then
	all
else
	exit
fi





