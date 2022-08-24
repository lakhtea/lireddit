import { MigrationInterface, QueryRunner } from "typeorm";

export class FakePosts1661313615093 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            insert into post (title, text, "createdAt", "creatorId") values ('Little Bit of Heaven, A', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '2022-03-30T12:27:49Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Two English Girls (Les deux anglaises et le continent)', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '2021-09-09T05:53:41Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('American Graffiti', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.', '2022-03-18T09:38:13Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Tim and Eric''s Billion Dollar Movie', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '2022-06-05T02:43:17Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Home Song Stories, The', 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.', '2022-02-27T19:36:08Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Koti-ikävä', 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '2022-06-23T09:34:11Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Kiss, The', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2022-03-09T07:07:39Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Prophet, the Gold and the Transylvanians, The (Profetul, aurul si Ardelenii)', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.', '2022-05-16T10:05:23Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Something to Talk About', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.
    
    Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.', '2021-12-18T11:04:58Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Parking Lot Movie, The', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.', '2022-07-24T19:04:30Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Mexican, The', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.', '2022-06-04T10:53:42Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Danger! 50,000 Zombies', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '2021-11-09T18:30:05Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Max Manus', 'In congue. Etiam justo. Etiam pretium iaculis justo.', '2022-02-24T03:27:16Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('DNA', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '2022-07-05T13:31:10Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Drag Me to Hell', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.
    
    Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '2022-04-05T02:51:47Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('My Cousin Rachel', 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    
    Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.', '2022-04-03T19:57:42Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Here Comes Mr. Jordan', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '2022-06-16T07:10:01Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('People vs. Larry Flynt, The', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '2022-06-22T22:03:11Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Crew, The', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.
    
    Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '2021-12-25T11:58:10Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Puffy Chair, The', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.
    
    Phasellus in felis. Donec semper sapien a libero. Nam dui.', '2021-12-10T15:48:21Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Andre', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.
    
    Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.
    
    Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '2022-04-26T03:37:02Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Taffin', 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.', '2022-01-13T07:42:27Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Miss Congeniality 2: Armed and Fabulous', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.
    
    Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '2022-05-10T09:55:18Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Home of Dark Butterflies, The (Tummien perhosten koti)', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '2021-08-30T10:58:36Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Virgin Queen, The', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.
    
    Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.', '2021-12-15T05:37:34Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('In the Folds of the Flesh', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.
    
    Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '2021-11-01T13:36:23Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Life of Crime', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '2022-01-31T14:49:55Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Loverboy', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.
    
    In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.', '2022-03-26T09:31:43Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Nazis Strike, The (Why We Fight, 2)', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', '2021-09-18T17:20:39Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Attila Marcel', 'In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '2022-06-15T20:25:49Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Immortal Sergeant', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.
    
    Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.
    
    Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '2021-11-14T02:39:09Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Coast of Death', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '2021-11-28T09:26:07Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Honey Pot, The', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.
    
    Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.
    
    Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '2021-09-22T21:31:41Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Gates of Heaven', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.
    
    Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.
    
    Sed ante. Vivamus tortor. Duis mattis egestas metus.', '2021-09-17T16:37:13Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Lord of War', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.
    
    Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '2021-12-26T17:11:39Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Little Birds', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '2021-09-17T08:05:33Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Kiss Before Dying, A', 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.
    
    Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.
    
    Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '2022-01-06T04:07:38Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Godzilla: Tokyo S.O.S. (Gojira tai Mosura tai Mekagojira: Tôkyô S.O.S.)', 'In congue. Etiam justo. Etiam pretium iaculis justo.
    
    In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.', '2022-08-11T17:37:11Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Big Deal on Madonna Street (I Soliti Ignoti)', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '2021-12-17T14:51:57Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('CrissCross', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '2022-07-04T21:13:45Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Heartbreak Kid, The', 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.', '2022-02-14T07:38:43Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Shadows of a Hot Summer (Stíny horkého léta)', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.
    
    Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.', '2022-02-23T15:56:46Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Puppet Master: Axis of Evil (Puppet Master 10)', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.
    
    Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '2021-10-28T11:23:02Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('I.Q.', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.
    
    Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.', '2021-10-04T22:10:57Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Indiana Jones and the Kingdom of the Crystal Skull', 'Sed ante. Vivamus tortor. Duis mattis egestas metus.', '2021-08-27T10:10:31Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('What Have They Done to Your Daughters?', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', '2022-01-04T05:05:22Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Death of a Dynasty', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.
    
    Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.', '2022-05-30T17:33:52Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Mystery of the Wax Museum', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.
    
    Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '2021-11-09T05:49:51Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Adios Carmen', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.
    
    In congue. Etiam justo. Etiam pretium iaculis justo.', '2022-07-11T21:05:49Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('House, The (A Casa)', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '2022-01-16T10:03:47Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Attack the Gas Station! (Juyuso seubgyuksageun)', 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.
    
    Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.
    
    In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.', '2022-05-31T17:25:54Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Darfur Now', 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.
    
    Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.
    
    Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '2022-02-28T01:09:12Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Book of Eli, The', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.
    
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.', '2022-05-07T01:31:15Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Without a Clue', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.
    
    Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '2021-10-15T10:04:00Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Submarine', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '2021-11-30T17:21:17Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Beware of Mr. Baker', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '2021-12-25T22:27:48Z', 1);
    insert into post (title, text, "createdAt", "creatorId") values ('Hero Wanted', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.
    
    Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.
    
    Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '2022-08-15T20:23:36Z', 1);`);
  }

  public async down(_: QueryRunner): Promise<void> {}
}
