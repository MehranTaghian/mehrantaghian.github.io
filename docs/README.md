# Mehran's Website
Here, I'm going to briefly discuss what to change for each section.

This page is developed on top of [Hyde](https://github.com/poole/hyde) developed by Mark Otto. Starting from the picture at the top, it has been generated using the `Untitled.ipynb` notebook and the data in `skills.yml` in the same directory as the notebook.

Then we have the Expertise section whose diagrams are under `_includes/expertise.html` and its corresponsing css doc is under `public/css/progress.css`. To add more expertise, simply add the data within the `_data/expertise.yml`

For **Skills** section, the html documents exist under the `_includes/skills.html` and you only require to change the data under the `_data/skills.yml` directory. The css file was originally developed in `.scss` format which required to be compiled using the following command
```
sass progress_skills.scss progress_skill.css
```
Note that for now, I have removed extra items from the css file and made some changes. If you wanted to add more skills or skill groups under the `_data` directory and the code did not work well, try to modify the arguments in the `progress_skills.scss` file and rerun the code. I guess most of the time you only need to increase the `height` element in the `.skill` class under `progress_skills.css` file.

For all other sections, you can easily modify their content by changing the corresponding file under the `_data` directory.
